//Library
import express from' express';
import AWS from 'aws-sdk';
import multer from 'multer';

//Database model
import {ImageModel} from '../../database/allModels'

const Router = express.Router();

//Multer config
const storage = multer.memoryStorage();
const upload = multer({storage});

// aws s3 bucket
const s3Bucket = AWS.S3({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
    region: "ap-south-1"
});

// utility function
import {s3Uploads} from '../../utils/s3'


export default Router;