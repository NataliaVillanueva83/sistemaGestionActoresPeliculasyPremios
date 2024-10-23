/**arreglo con los actores ingresados en el sistema, cada elemento del array es un objeto, donde se le pone un id identificador,
/** *arreglo con los actores ingresados en el sistema, cada elemento del array es un objeto, 
 * donde se le pone un id identificador,*/
const actores= [];
const actor={
    id: 'actor',
    name: 'John Doe',
    movies: ['Inception', 'The Dark Knight']
};
actor= {
    id: 'actor2',
    name: 'Jane Smith',
    movies: ['Star Wars', 'Avengers']
};
actor= {
    id: 'actor3',
    name: 'Mike Johnson',
    movies: ['Avatar', 'Titanic']
};
actores.push(actor);
const movies= [];
 movies.push({
    id: 'movie1',
    title: 'Inception',
    year: 2010,
    genre: 'Sci-Fi',
    director: 'Christopher Nolan',
    actors: ['actor', 'actor2'],
    awards: ['Best Picture']
});
movies.push({
    id: 'movie2',
    title: 'The Dark Knight',
    year: 2008,
    genre: 'Action',
    director: 'Christopher Nolan',
    actors: ['actor'],
    awards: ['Best Actor']
});
movies.push({
    id: 'movie3',
    title: 'Star Wars',
    year: 1977,
    genre: 'Sci-Fi',
    director: 'George Lucas',
    actors: ['actor', 'actor2'],
    awards: [ 
        { 
            nombre: "Oscar Mejor actor", 
            year:1999}
    ]
});



//menu: elegir busquedas por actores o peliculas
