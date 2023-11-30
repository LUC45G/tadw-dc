const express = require('express');
const app = express();

// TODO probar la key del profe, capaz haya que pedir una nueva propia
const API_KEY = "62e9afa9b26ec1658e4f7c572663a19b"; 

const MovieDB = require('node-themoviedb');
const mdb = new MovieDB(API_KEY));


app.get('/', async (req, res) => {
    try {
        const movieIds = req.query.movieIds;
        const movieInfo = await mdb.movie.getDetails(movieIds);
        res.json(movieInfo);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
});

const PORT = 3004;
app.listen(PORT, () => {
    console.log(`Info microservice is running on port ${PORT}`);
});
