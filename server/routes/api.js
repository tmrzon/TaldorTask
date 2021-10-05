const express = require('express')
const router = express.Router();
const movieController=require('../controllers/movie')

router.get('/movies',movieController.getMovies)
router.post('/movie',movieController.newMovie)
router.delete('/movie/:name',movieController.deleteMovie)

module.exports=router