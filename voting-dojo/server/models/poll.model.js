const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const OptionSchema = new mongoose.Schema({
  optionOne: {
    type: String,
    required: [
      true,
      'Option 1 is required!'
    ]
  },
  optionTwo: {
    type: String,
    required: [
      true,
      'Option 2 is required!'
    ]
  },
  optionThree: {
    type: String
  },
  optionFour: {
    type: String
  },
  voteOne: {
    type: Number,
    default: 0
  },
  voteTwo: {
    type: Number,
    default: 0
  },
  voteThree: {
    type: Number,
    default: 0
  },
  voteFour: {
    type: Number,
    default: 0
  }
})

const PollSchema = new mongoose.Schema ({
  question: {
    type: String,
    required: [
      true,
      'The question must be 10 characters or longer!'
    ],
    unique: true
  },
  options: [OptionSchema],
  voted:[{
    type: mongoose.Schema.Types.ObjectId
  }],
  created: {
    type: Date,
    default: Date.now
}
}, {timestamps: true}
)

PollSchema.plugin(uniqueValidator);

const Poll = mongoose.model('Poll', PollSchema);

module.exports = Poll;