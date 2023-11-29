const express = require('express');
const app = express();
const myMoviesService = require('./myMoviesService');
const infoService = require('./infoService');

app.get('/random', async (req, res) => {
    try {
        const myMovies = await myMoviesService.getMyMovies();
        const randomMovies = getRandomMovies(myMovies, 5);
        const movieInfo = await infoService.getMovieInfo(randomMovies);
        res.json(movieInfo);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
});

function getRandomMovies(movieList, count) {
    // Implementa la lógica para obtener películas al azar
    var start = Math.floor(Math.random() * (movieList.length - count));
    return movieList.slice(start, start + count);
}

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Random microservice is running on port ${PORT}`);
});
