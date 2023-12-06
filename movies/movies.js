const express = require('express');
const app = express();
const axios = require('axios');

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://random:3002/');
        const movieList = response.data; // Accede a los datos

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
    
    // Verifica si movieList es un array antes de iterar
    if (Array.isArray(movieList)) {
        movieList.forEach(function(movie, index) {
            let info = `${index} - ${movie.title} salió el ${movie.release_date} y dura ${movie.runtime} minutos.`;
            ret = ret + `<p> ${info} </p>\n`;
        });
    } else {
        ret = '<p>La respuesta no es un array de películas.</p>';
    }

    return ret + '</div>';
}

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Movies microservice is running on port ${PORT}`);
});
