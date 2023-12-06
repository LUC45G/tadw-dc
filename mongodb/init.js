db = db.getSiblingDB('movies');

db.createCollection('movies'); // Crea la colección

db.movies.insertMany([
    { title: 'Movie 1', year: '2001' },
    { title: 'Movie 2', year: '2002' },
    { title: 'Movie 3', year: '2003' },
    { title: 'Movie 4', year: '2004' },
    // Agrega más películas aquí
]);

