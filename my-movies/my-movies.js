const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Movie = require("./movieSchema");

app.get("/", async (req, res) => {
  try {
    // Obtén la lista de películas desde la base de datos MongoDB
    const myMovies = await Movie.find();

    // Envia la lista de películas como respuesta
    res.json(myMovies);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
});

const PORT = 3003;

mongoose
  .connect("mongodb://admin:admin@mongo:27017/movies?authSource=admin")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`MyMovies microservice is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
