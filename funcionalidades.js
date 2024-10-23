
//agregar nuevos premios a las peliculas
function addAward (award, movie){
    if(!movie.awards){
        movie.awards=[];
    }
    movie.awards.push(award);
}
//ver peliculas mas premiadas
function mostAwardedMovie(movies){

}

//busqueda de peliculas por genero
function genreSearch (genero, peliculas){
    return peliculas.filter(movie=> movie.genre===genero);

}
//busqueda de peliculas por actor
function moviesByActor(actor, peliculas){
    return peliculas.filter(movie=> movie.actors.includes(actor));
}
//cuantos premios gano una pelicula
function awardsPerMovie(movie){
    return movie.awards.length;
}
//agregar pelicula
function addMovie(){
 //agregar validacion para que no exista la pelicula
 const pelicula= {
     id: 'string',
     title: 'string',
     year: 'number',
     genre: 'string',
     director: 'string',
     actors: [],
     awards: []
 }
     

}
//agregar actor
function addActor(){
    //agregar validacion para que no exista el actor
    //agregar validacion para que no exista la pelicula
    const actor= {
        id: 'string',
        name: 'string',
        movies: []
    }
}

//funcion agregar actor a pelicula