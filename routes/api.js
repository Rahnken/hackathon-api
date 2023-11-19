"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiController_1 = __importDefault(require("../controllers/apiController"));
const router = express_1.default.Router();
router.get("/highscores", apiController_1.default.getHighscores);
router.post("/highscores", apiController_1.default.postHighscore);
exports.default = router;
//# sourceMappingURL=api.js.map