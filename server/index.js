require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";

//Database Connection
import ConnectDB from "./database/connection";
const zomato = express();
zomato.use(cors());
zomato.use(express.json());
zomato.use(helmet());

zomato.listen(4000, () => {
  ConnectDB().then(() => {
      console.log("Server is running !!! ");
  })
  .catch((error) => {
      console.log ("Server is running, but database connection is failed......");
    //   console.log(error);
  })
});
