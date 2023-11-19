"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const scores_1 = __importDefault(require("../models/scores"));
const apiController = {
    getHighscores: async (req, res) => {
        const highscores = await scores_1.default.find().sort({ score: -1 }).limit(10);
        res.status(200).json(highscores);
    },
    postHighscore: async (req, res) => {
        const { name, score } = req.body;
        const newHighscore = new scores_1.default({ name, score });
        try {
            await newHighscore.save();
            res.status(201).json(newHighscore);
        }
        catch (error) {
            res.status(409).json({ message: " Some error has occured" });
        }
    },
};
exports.default = apiController;
//# sourceMappingURL=apiController.js.map