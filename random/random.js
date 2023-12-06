const express = require('express');
const axios = require('axios'); // Importa el módulo axios
const app = express();

app.get('/', async (req, res) => {
    try {
        // Obtiene la lista de películas desde el microservicio remoto
        const myMovies = await axios.get('http://my-movies:3003/');
        
        // Extrae solo los datos relevantes (suponiendo que myMovies.data contiene la lista de películas)
        const movieList = myMovies.data.map(movie => movie.id_movie);

        // Obtiene películas al azar de la lista
        const randomMovies = getRandomMovies(movieList, 5);

        // Obtiene información de películas desde el microservicio remoto
        let movieInfo = [];
        for (let m of randomMovies) {
            let info = await axios.get(`http://info:3004/${m}`);
            movieInfo.push(info.data);
        };

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

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Random microservice is running on port ${PORT}`);
});
