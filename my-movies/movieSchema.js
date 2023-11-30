const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  runtime: {
    type: Number,
    required: true,
  },
  release_date: {
    type: Date,
    required: true,
  },
  // Otros campos relevantes
});

// Exporta el modelo 'Movie' basado en el esquema 'movieSchema'
module.exports = mongoose.model('Movie', movieSchema);
