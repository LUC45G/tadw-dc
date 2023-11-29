// movies.js
const express = require('express');
const app = express();
const randomService = require('./randomService');

app.get('/', async (req, res) => {
    try {
        const movieList = await randomService.getRandomMovies();
        // Renderizar la página web con la información recolectada
        res.send(renderMoviePage(movieList));
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
});

function renderMoviePage(movieList) {
    // Implementa la lógica para renderizar la página web
    // con la información recolectada de las películas
    let ret = '<div>\n';
    movieList.forEach(function(movie, index) {
        let movie = `${index} - ${movie.title} salió el ${movie.release_date} y dura ${movie.runtime} minutos.`;
        ret = ret + `<p> ${movie} </p>\n`;
    });

    return ret + '</div>';
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Movies microservice is running on port ${PORT}`);
});
