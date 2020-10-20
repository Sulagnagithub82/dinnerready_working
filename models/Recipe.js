const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const RecipeSchema = new Schema({
  image: {
    type: String,
  },
  ingredients: {
    type: [],
    required: true
  },
  meals: {
    type: String,
    required: true
  },
  serve: {
    type: String,
    required: true
  },
  method: {
    type: String,
    default: true
  }
});
module.exports = Recipe = mongoose.model("recipes", RecipeSchema);