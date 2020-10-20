const express = require("express");
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

// Load Blog model
const Blog = require("../../models/Blog");

router.get("/", (req, res) => {
  Blog.find((err,docs)=>{
    if(!err) res.send(docs)
    else console.log('Error while retrieving all records : '+JSON.stringify(err,undefined,2))
  })
})

router.post("/", (req, res) => {
  const newEntry = new Blog({
    title: req.body.title,
    message: req.body.message
  })
  newEntry.save((err,docs)=>{
    if(!err) res.send(docs)
    else console.log('Error while creating new records : '+ JSON.stringify(err,undefined,2))
  })
})

router.put('/:id', (req, res) => {

  if(!ObjectID.isValid(req.params.id))
  return res.status(400).send('No record with given id : ' + req.params.id)

  const updatedEntry = {
    title: req.body.title,
    message: req.body.message
  }

  Blog.findByIdAndUpdate(req.params.id, {$set: updatedEntry },{new:true}, (err, docs)=> {
    if(!err) res.send(docs)
    else console.log('Error while updating record : ' + JSON.stringify(err,undefined,2))
  })

})

router.delete('/:id', (req, res) => {

  if(!ObjectID.isValid(req.params.id))
  return res.status(400).send('No record with given id : ' + req.params.id)

  Blog.findByIdAndRemove(req.params.id, (err, docs)=> {
    if(!err) res.send(docs)
    else console.log('Error while deleting record : ' + JSON.stringify(err,undefined,2))
  })

})

module.exports = router;