// routes/Blog.js
import express from "express";
import Blog from "../models/Blog.js";

const router = express.Router();

// Create a new blog
router.post("/create", async (req, res, next) => {
  try {
    const { title, content } = req.body;

    const newBlog = new Blog({ title, content });
    await newBlog.save();

    res.status(201).json({ success: true, message: "Blog created successfully!", blog: newBlog });
  } catch (err) {
    next(err);
  }
});

// Get all blogs
router.get("/", async (req, res, next) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json({ success: true, blogs });
  } catch (err) {
    next(err);
  }
});

export default router;
