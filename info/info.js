const express = require('express');
const app = express();
const tmdbService = require('./tmdbService');

app.get('/info', async (req, res) => {
    try {
        const movieIds = req.query.movieIds;
        const movieInfo = await tmdbService.getMovieInfo(movieIds);
        res.json(movieInfo);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Info microservice is running on port ${PORT}`);
});
