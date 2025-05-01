import express from "express";
import {
  UserLogin,
  UserRegister,
  addWorkout,
  getUserDashboard,
  getWorkoutsByDate,
} from "../controllers/User.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/signup", UserRegister);
router.post("/signin", UserLogin);

router.get("/dashboard", verifyToken, getUserDashboard);
router.get("/workout", verifyToken, getWorkoutsByDate);
router.post("/workout", verifyToken, addWorkout);

router.get("/tutorial", verifyToken, (req, res) => {
  const weeklyRoutine = {
    message: "Welcome to the Tutorial page",
    routine: {
      "Monday": {
        focus: "Chest and Triceps",
        exercises: [
          { name: "Bench Press", sets: 4, reps: 10 },
          { name: "Incline Dumbbell Press", sets: 3, reps: 12 },
          { name: "Chest Flyes", sets: 3, reps: 15 },
          { name: "Tricep Dips", sets: 3, reps: 12 },
          { name: "Overhead Tricep Extension", sets: 3, reps: 10 },
        ],
      },
      "Tuesday": {
        focus: "Back and Biceps",
        exercises: [
          { name: "Deadlift", sets: 4, reps: 8 },
          { name: "Pull-Ups", sets: 3, reps: 10 },
          { name: "Bent-Over Row", sets: 3, reps: 12 },
          { name: "Barbell Curl", sets: 3, reps: 12 },
          { name: "Hammer Curl", sets: 3, reps: 15 },
        ],
      },
      "Wednesday": {
        focus: "Legs",
        exercises: [
          { name: "Squats", sets: 4, reps: 10 },
          { name: "Leg Press", sets: 3, reps: 12 },
          { name: "Lunges", sets: 3, reps: 12 },
          { name: "Leg Curl", sets: 3, reps: 15 },
          { name: "Calf Raise", sets: 3, reps: 20 },
        ],
      },
      "Thursday": {
        focus: "Shoulders and Abs",
        exercises: [
          { name: "Military Press", sets: 4, reps: 10 },
          { name: "Lateral Raise", sets: 3, reps: 12 },
          { name: "Front Raise", sets: 3, reps: 12 },
          { name: "Plank", sets: 3, duration: "60s" },
          { name: "Russian Twists", sets: 3, reps: 20 },
        ],
      },
      "Friday": {
        focus: "Full Body",
        exercises: [
          { name: "Clean and Jerk", sets: 4, reps: 8 },
          { name: "Push-Ups", sets: 3, reps: 15 },
          { name: "Kettlebell Swing", sets: 3, reps: 15 },
          { name: "Burpees", sets: 3, reps: 12 },
          { name: "Mountain Climbers", sets: 3, reps: 20 },
        ],
      },
      "Saturday": {
        focus: "Rest or Cardio",
        exercises: [{ name: "Treadmill Run", duration: "30 min" }],
      },
      "Sunday": {
        focus: "Rest",
        exercises: [],
      },
    },
  };
  res.status(200).json(weeklyRoutine);
});

router.get("/blog", verifyToken, (req, res) => {
  res.status(200).json({ message: "Welcome to the Blog page" });
});

router.get("/contact", verifyToken, (req, res) => {
  res.status(200).json({ message: "Welcome to the Contact page" });
});

export default router;