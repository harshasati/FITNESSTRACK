// models/Blog.js
import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
}, { timestamps: true }); // will automatically add createdAt and updatedAt

export default mongoose.model("Blog", BlogSchema);
