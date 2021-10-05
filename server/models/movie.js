const mongoose = require('mongoose')

const movie = new mongoose.Schema({
    movieName: {
        type: String
    },
    addingDate: {
        type: String
    },
    imdb: {
        type: String
    },
    poster: {
        type: String
    },
    category: {
        type: String
    }
})

module.exports=mongoose.model('Movie',movie)