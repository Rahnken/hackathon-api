import express from "express";
import apiController from "../controllers/apiController";
const router = express.Router();

/* GET home page. */
router.get("/highscores", apiController.getHighscores);
router.post("/highscores", apiController.postHighscore);

export default router;
