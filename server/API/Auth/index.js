// Library
import express from "express";
import bcrypt from "bcryptjs";
import jWT from "jsonwebtoken";

//Models
import { UserModal } from "../../database/allModels";

//Create a router
const Router = express.Router();

/**
 * Router      /signup
 * Des         Register new user
 * Params      none
 * Access      Public
 * Method      POST
 */

Router.post("/signup", async (req, res) => {
  try {
    const { email, password, fullName, phoneNumber } = req.body.credentials;
    const checkUserByEmail = await UserModal.findOne({ email });
    const checkUserByPhone = await UserModal.findOne({ phoneNumber });

    if (checkUserByPhone || checkUserByEmail) {
      return res.json({ user: "User already Exists!" });
    }
    // hash password
    const bcryptSalt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, bcryptSalt);

    //save data to database
    await UserModal.create({
      ...req.body.credentials,
      password: hashedPassword,
    });

    //generate JWT auth token
    const token = jwt.sign({ user: {fullName, email} }, "ZomatoApp")

    return res.status(200).json({token, status: "success"});
  } catch (error) {
    return res.status(69).json({ error: error.message });
  }
});
