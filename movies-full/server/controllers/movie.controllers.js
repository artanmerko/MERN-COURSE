const Movie = require('../models/movie.model')


module.exports.getAllMovies=(req,res)=>{
    Movie.find()
        .then(allMovies=>res.json(allMovies))
        .catch(err=>res.json({message:'Missing movies',err}))
}

module.exports.createMovie=(req,res)=>{
    Movie.create(req.body)
        .then(newMovie=>res.json(newMovie))
        .catch(err=>res.status(400).json({message:'Movie not created!',err}))
}

module.exports.getOneMovie=(req,res)=>{
    Movie.findOne({_id: req.params.id})
    .then(oneMovies=>res.json(oneMovies))
    .catch(err=>res.json({message:'Missing movie',err}))
}
module.exports.editMovie=(req,res)=>{
    Movie.updateOne({_id: req.params.id}, req.body, {new:true})
    .then(newMovie=>res.json(newMovie))
    .catch(err=>res.json({message:"Couldn't edit movie",err}))
}

module.exports.deleteMovies=(req,res)=>{
    Movie.deleteOne({_id: req.params.id})
    .then(deletedOne=>res.json(deletedOne))
    .catch(err=>res.json({message:"Couldn't delete the movie",err}))
}
