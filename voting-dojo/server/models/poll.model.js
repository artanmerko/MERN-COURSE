const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PollSchema = new mongoose.Schema ({
  question: {
    type: String,
    required: [
      true,
      'The question must be 10 characters or longer!'
    ],
    unique: true
  },
  optionOne: {
    type: String,
    required: [
      true,
      'Option 1 is required!'
    ]
  },
  voteOne: {
    type: Number,
    default: 0
  },
  optionTwo: {
    type: String,
    required: [
      true,
      'Option 2 is required!'
    ]
  },
  voteTwo: {
    type: Number,
    default: 0
  },
  optionThree: {
    type: String
  },
  voteThree: {
    type: Number,
    default: 0
  },
  optionFour: {
    type: String
  },
  voteFour: {
    type: Number,
    default: 0

  },
  created: {
    type: Date,
    default: Date.now
}
}, {timestamps: true}
)

PollSchema.plugin(uniqueValidator);

const Poll = mongoose.model('Poll', PollSchema);

module.exports = Poll;