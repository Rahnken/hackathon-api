"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const highscoreSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
});
const Highscores = mongoose_1.default.model("Score", highscoreSchema);
exports.default = Highscores;
//# sourceMappingURL=scores.js.map