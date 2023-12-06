const axios = require("axios");
const express = require("express");
const app = express();

async function getMovieInfo(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=a5b42e4f5564bc636d81d5fc5a3ae2b7`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

app.get("/:id", async (req, res) => {
  const movieId = req.params.id;
  const movieInfo = await getMovieInfo(movieId);
  if (movieInfo) {
    console.log("Película encontrada:", movieInfo.title);
  } else {
    console.log("Película no encontrada");
  }
  res.json(movieInfo);
});

app.listen(3004, () => {
  console.log("Server is running on port 3004");
});
