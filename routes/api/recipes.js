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
//Get recipe by id,id=${id}&type=single
// router.get('/:id', async (req, res) => {
//   Recipe.findById(req.params.id)
//   // console.log("Inside find by id")
//   .then(doc =>{
//     if (!doc) {return res.status(404).end();}
//     return res.status(200).json(doc);
//   })
//   .catch(err => next(err));
// })

//Recipe.findOne();
//recipes_by_id?id=${id}&type=single
router.get("/:id", (req, res)=> {
  let type = req.query.type
  let ids = req.query.id

  if (type === "array") {
    let ids = req.query.id.split(',');
    ids = [];
    ids = ids.map(item => {
      return item
    })


  }
  Recipe.find({'_id': { $in: ids } })
    .populate('writer')
    .exec((err,recipe) => {
      if(err) return req.status(400).send(err)
      return res.status(200).send(recipe)
    })
})

module.exports = router;