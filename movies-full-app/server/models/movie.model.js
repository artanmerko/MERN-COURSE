const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const MovieSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,'Title is mandatory!'],
        minLength:[3,"Title can't be less than 3 chars!"],
        unique:true
    },
    genre:{
        type:String,
        enum:['Drama','Fantasy','Action']
    },
    rating:{
        type:String,
        enum:['rate1','rate2','rate3']
    },
    image:{
        type:String
    }
},{timestamps:true})
MovieSchema.plugin(uniqueValidator);
const Movie = mongoose.model('Movie',MovieSchema)

module.exports = Movie;