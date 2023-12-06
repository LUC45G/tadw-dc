const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  id_movie: {
    type: Number,
    required: true,
  },
  // Otros campos relevantes
});

// Exporta el modelo 'Movie' basado en el esquema 'movieSchema'
module.exports = mongoose.model('Movie', movieSchema);
