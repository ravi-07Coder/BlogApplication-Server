import mongoose from "mongoose";

import grid from "gridfs-stream";

const url = "https://blog-application-server.herokuapp.com";

let gfs;
const conn = mongoose.connection;

conn.once('open', () => {
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection('fs');
});

export const uploadImage = (request, response) => {
 try{
    if (!request.file) return response.status(404).json("file not found");

  const imageURL = `${url}/file/${request.file.filename}`;

  response.status(200).json(imageURL);
 }
 catch(error)
 {
     response.status(500).json("get the error",error)
 }
};

export const getImage = async (request, response) => {
  try {
    const file = await gfs.files.findOne({ filename: request.params.filename });
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(response);
  } catch (error) {
    response.status(500).json("failed to fetch",error);
  }
};
