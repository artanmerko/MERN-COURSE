const Author = require('../models/author.model');

module.exports.getAllNames = (req, res) => {
  Author.find({})
    .then(allNames=>res.json(allNames))
    .catch(err=>console.log(err))
}

module.exports.getOneName = (req, res) => {
  Author.findOne({_id: req.params.id})
    .then(oneName=>res.json(oneName))
    .catch(err=>console.log(err))
}

module.exports.createName = (req, res) => {
  Author.create(req.body)
    .then(newName=>res.json(newName))
    .catch(err=>console.log(err))
}

module.exports.updateName = (req, res) => {
  Author.findOneAndUpdate({id: req.params.id}, req.body, {new: true})
    .then(updatedName=>res.json(updatedName))
    .catch(err=>console.log(err))
}

module.exports.deleteName = (req, res) => {
  Author.deleteOne({_id: req.params.id})
    .then(result=>res.json(result))
    .catch(err=>console.log(err))
}