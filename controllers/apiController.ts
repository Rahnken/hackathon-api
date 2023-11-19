import { Request, Response } from "express";
import Highscores from "../models/scores";

const apiController = {
  getHighscores: async (req: Request, res: Response) => {
    const highscores = await Highscores.find().sort({ score: -1 }).limit(10);
    res.status(200).json(highscores);
  },
  postHighscore: async (req: Request, res: Response) => {
    const { name, score } = req.body;
    const newHighscore = new Highscores({ name, score });
    try {
      await newHighscore.save();
      res.status(201).json(newHighscore);
    } catch (error) {
      res.status(409).json({ message: " Some error has occured" });
    }
  },
};
export default apiController;
