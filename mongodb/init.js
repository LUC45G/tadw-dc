db = db.getSiblingDB('movies');

db.createCollection('movies'); // Crea la colección

db.movies.insertMany([
    { id_movie: '121' },
    { id_movie: '122' },
    { id_movie: '123' },
    { id_movie: '124' },
    { id_movie: '125' },
    // Agrega más películas aquí
]);

