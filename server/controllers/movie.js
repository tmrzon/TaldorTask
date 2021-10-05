const data = require('../data.json')
const Movie = require('../models/movie')
module.exports = {
    getMovies: (req, res) => {
        res.status(200).json(data.results)
    },
    newMovie: async (req, res) => {
        try {
            const movie = new Movie(req.body)
            await movie.save()
            res.status(200).json({ message: 'Movie created successfuly.' })
        } catch (e) {
            res.status(500).json({ error: e })
        }
    },
    deleteMovie: (req, res) => {
        Movie.deleteOne({ movieName: req.params.name }).then(m => {
            res.status(200).json({ message: 'movie deleted' })
        }).catch(e => {
            res.send(e)
        })
    }
}