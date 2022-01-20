//Library
import express from "express";
import AWS from "aws-sdk";
import multer from "multer";

//Database model
import { ImageModel } from "../../database/allModels";

const Router = express.Router();

//Multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });

// utility function
import { s3Upload } from "../../utils/s3";

/**
 * Route       /
 * Des         Upload given image to s3 bucketand save file link to mongoDB
 * Params      none
 * Access      Public
 * Method      POST
 */

Router.post("/", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    //s3 bucket options

    const bucketOptions = {
      Bucket: "zomato-by-harsh",
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read", //Access control List
    };

    const uploadImage = await s3Upload(bucketOptions);
    const saveImageToDatabase = await ImageModel.create({
      images: [{ Location: uploadImage.Location }],
    });

    return res.status(200).json(saveImageToDatabase);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
