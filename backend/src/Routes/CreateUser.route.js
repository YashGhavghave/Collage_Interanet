import { createuser } from "../Controllers/user.controller";
import express, { response } from "express";

const Router = express.Router();

Router.post("create-account", async (req, res, next) => {
  try {
    const { name, email, password } = req.body();
    if (!name || !email || !password){
        return res.status(400).json({message:"Fields are Missing"})
    }
    
    const result = await createuser(name, email, password);

    if (!result.success){
        return res.status(500).json({message:result.message})
    }
  } 
  catch (error) {
    return res.status(500).json({message: "User Creation Failed"})
  }
});


export default Router;
