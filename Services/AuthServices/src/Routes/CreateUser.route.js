import { createuser } from "../Controllers/user.controller.js";
import express from "express";

const Router = express.Router();

Router.post("/create-account", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Fields are Missing" });
    }
    const result = await createuser(name, email, password);
    if (!result.success) {
      return res.status(500).json({ message: result.message });
    }
    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user: result.user,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "User Creation Failed", error: error.message });
  }
});

export default Router;
