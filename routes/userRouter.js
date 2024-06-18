import express from "express";
import { home, addRoomMate } from "../controllers/userController.js";
const router = express.Router();

router.get("/", home);

router.post("/roommate", addRoomMate);

router.get('*', (req, res) => {
    res.status(404).send("Page Not Found");
})

export default router