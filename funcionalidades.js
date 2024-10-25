
//agregar nuevos premios a las peliculas
function addAward (award, movie){
    if(!movie.awards){
        movie.awards=[];
    }
    movie.awards.push(award);
}
//ver peliculas mas premiadas
function mostAwardedMovie(){
//VER LAS PELICULAS MAS PREMIADAS
let mostAwarded=[];
let maxAwards=0;
for(let movie of this.movies){
    if(movie.awards.length>maxAwards){
        maxAwards=movie.awards.length;
        mostAwarded=[movie];
    }else if(movie.awards.length===maxAwards){
        mostAwarded.push(movie);
    }
}
  console.tale (mostAwarded);
}

//busqueda de peliculas por genero

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
function addActor(id, nombre){
    //agregar validacion para que no exista el actor
    
    const actor= {
        id: id,
        name: nombre,
        
    }
    //verificar si el actor esta --if verificarActor
    this.actors.push(actor);
}

//funcion agregar actor a pelicula



//busqueda de peliculas por genero
function searchMoviesByGenre(genero, peliculas){
    const resultado= peliculas.filter(movie=> movie.genre===genero);
    console.table(resultado);
    

}
//busqueda de peliculas por actor
function moviesByActor(actor, peliculas){
    return peliculas.filter(movie=> movie.actors.includes(actor));
}
//cuantos premios gano una pelicula
function awardsPerMovie(movie){
    return movie.awards.length;
}
function  seeAdwardsbyMovie (title){

}
//agregar pelicula
function addMovie(title, genre, actors){
 //agregar validacion para que no exista la pelicula
 const movie= {
     title: title,
     genre: genre,
     actors: [],
     awards: [],
 };
this.movies.push(movie);    
     
}

