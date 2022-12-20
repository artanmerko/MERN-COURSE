const Player = require("../models/player.model");

const createNewPlayer = (req, res) => {
  const { body } = req;
  console.log(body);
  Player.create(req.body)
    .then((newPlayer) => {
      res.json(newPlayer);
    })
    .catch((err) => res.status(400).json(err));
};

const getAllPlayers = (req, res) => {
  Player.find()
    .then((allPlayers) => {
      res.json(allPlayers);
    })
    .catch((err) => res.status(400).json(err));
};

const deletePlayer = (req, res) => {
  Player.deleteOne({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) => err.status(400).json(err));
};

const updatePlayer = (req, res) => {
  Player.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPlayer) => {
      res.json(updatedPlayer);
    })
    .catch((err) => res.status(400).json(err));
};

module.exports = { createNewPlayer, getAllPlayers, deletePlayer, updatePlayer };