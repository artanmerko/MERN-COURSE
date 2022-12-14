const Poll = require('../models/poll.model')

module.exports.getAllPolls = (req, res) => {
  Poll.find({})
    .then(allPolls=>res.json(allPolls))
    .catch(err => res.json({message: 'Something went wrong', error: err }))
  }

module.exports.getOnePoll = (req, res) => {
  Poll.findOne({_id: req.params.id})
    .then(onePoll=>res.json(onePoll))
    .catch(err => res.json({message: 'Something went wrong', error: err }))
  }

module.exports.createPoll = (req, res) => {
  Poll.create(req.body)
    .then(createdPoll=>res.json(createdPoll))
    .catch(err => res.status(400).json({message: 'Poll mising', error: err }))
  }

module.exports.updatePoll = (req, res) => {
  Poll.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(updatedPoll=>res.json(updatedPoll))
    .catch(err => res.json({message: 'Something went wrong', error: err }))
  }

module.exports.deletePoll = (req, res) => {
  Poll.findOneAndDelete({_id: req.params.id})
    .then(updatedPoll=>res.json(updatedPoll))
    .catch(err => res.json({message: 'Something went wrong', error: err }))
  }