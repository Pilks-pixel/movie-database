const express = require('express');
const { findById } = require('../models/movie');
const router = express.Router();


const movie = require('../models/movie');

router.get('/', (req, res) => {
    const movieData = movie.all
    res.send(movieData)
});

router.post('/', (req, res) => {
    const data = req.body;
    const newMovie = movie.create(data);
    console.log('new movie created')
    console.log(data)
    res.status(201).send({message: `${newMovie.title} added to the database`});
})

router.get('/:id', (req, res) => {
    const movieId = parseInt(req.params.id);
    const movieSelected = movie.findById(movieId);

    if (!movieId) {
        return res.status(404).send('Movie not found')
    }
    return res.send(movieSelected);
})

// router.delete('/:id', (req, res) => {
//     const movieId = parseInt(req.params.id);
//     const movieToDelete = movie.findById(movieId);
//     delete movieToDelete;



// })


module.exports = router;