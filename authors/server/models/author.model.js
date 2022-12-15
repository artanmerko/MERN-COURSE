const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  name:{
    type: String,
    require: [
      true,
      `Name has to be more then 3 letters`
    ]
  }
});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;