import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.get('*', (req, res) => {
    res.status(404).send("Page Not Found");
})

export default router