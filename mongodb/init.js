db = db.getSiblingDB('movies');

db.createCollection('movies'); // Crea la colección

db.movies.insertMany([
    { id_movie: '121' },
    { id_movie: '122' },
    { id_movie: '123' },
    { id_movie: '124' },
    { id_movie: '125' },
    { id_movie: '126' },
    { id_movie: '127' },
    { id_movie: '128' },
    { id_movie: '129' },
    { id_movie: '135' },
    { id_movie: '136' },
    { id_movie: '137' },
    { id_movie: '138' },
    { id_movie: '139' },
    { id_movie: '140' },
    { id_movie: '141' },
    { id_movie: '142' },
    { id_movie: '143' },
    { id_movie: '144' },
    { id_movie: '145' },
    { id_movie: '146' },
    { id_movie: '147' },
    { id_movie: '148' },
    { id_movie: '149' },
    { id_movie: '150' },

    // Agrega más películas aquí
]);

