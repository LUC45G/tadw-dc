const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Movie = require('./models/movie');

app.get('/mymovies', async (req, res) => {
    try {
        const myMovies = await Movie.find();
        res.json(myMovies);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`MyMovies microservice is running on port ${PORT}`);
});

// models/movie.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    runtime: Number,
    release_date: Date,
    // Otros campos relevantes
});

module.exports = mongoose.model('Movie', movieSchema);
