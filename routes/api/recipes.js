const express = require("express");
const router = express.Router();
// Load User model
const Recipe = require("../../models/Recipe");

// @route POST api/users/register
// @desc Register user
// @access Public
// router.get("/recipes", (req, res) => {

//   Recipe.findOne()
    
// });

router.get('/', async (req, res) => {
  try {
      let recipes = await Recipe.find();
      res.json(recipes);
  } catch (error) {
      res.json({ message: error });
  }
});
//Get recipe by id
router.get('/:id', async (req, res) => {
  try {
      let allrecipes = await Recipe.findById(req.params.id).exec();
      res.json(allrecipes);
  } catch (error) {
      res.json({ message: error });
  }
});

//Recipe.findOne();

module.exports = router;