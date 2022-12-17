const mongoose = require('mongoose');


const PollSchema = new mongoose.Schema ({
  question: {
    type: String,
  },
  optionOne: {
    type: String
  },
  voteOne: {
    type: Number
  },
  optionTwo: {
    type: String
  },
  voteTwo: {
    type: Number
  },
  optionThree: {
    type: String
  },
  voteThree: {
    type: Number
  },
  optionFour: {
    type: String
  },
  voteFour: {
    type: Number
  }
}, {timestamps: true}
)

const Poll = mongoose.model('Poll', PollSchema)

module.exports = Poll;