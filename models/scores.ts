import mongoose from "mongoose";

const highscoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

const Highscores = mongoose.model("Score", highscoreSchema);
export default Highscores;
