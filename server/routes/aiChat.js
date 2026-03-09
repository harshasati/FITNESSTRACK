import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/chat", async (req, res) => {
  try {

    const { message } = req.body;

     console.log("Message received:", message);
    console.log("Gemini key:", process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

    const result = await model.generateContent(message);

    const response = await result.response;

    const text = response.text();

    res.json({ reply: text });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      reply: "AI error. Please try again.",
    });

  }
});

export default router;