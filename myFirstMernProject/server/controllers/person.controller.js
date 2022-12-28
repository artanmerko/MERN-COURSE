const Person = require('../models/person.model');

module.exports.index = (req, res) => {
  res.json({
    message: `Hello world!`
  })
}

module.exports.findAllPeople = (req, res) => {
  Person.find({})
    .then(findAllPeople=>{
      console.log(findAllPeople)
      res.json(findAllPeople)
    })
    .catch(err=>res.json({message: 'Something went wrong', error: err}))
}

module.exports.findOnePerson = (req, res) => {
  Person.findOne({_id: req.params.id})
    .then(person => res.json(person))
    .catch(err=>res.json({message: 'Something went wrong', error: err}))
}

module.exports.updatePerson = (req, res) => {
  Person.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(updatedPerson => res.json(updatedPerson))
    .catch(err=>res.json({message: 'Something went wrong', error: err}))
}

module.exports.createNewPerson = (req, res) => {
  Person.create(req.body)
    .then(person=>res.json(person))
    .catch(err=>res.json({message: 'Something went wrong', error: err}))
}
module.exports.deletePerson = (req, res) => {
  Person.deleteOne({_id: req.params.id})
   .then(result=>res.json({result: result}))
   .catch(err=>res.json({message: 'Something went wrong', error: err}))
}