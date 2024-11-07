import {administrador,movieManager} from "./arreglosActorMovies.js"
import prompt_sync from 'prompt-sync';


const prompt = prompt_sync();
//funciones para los visitadores
//buscar pelicula



function searchMovie() {
    const title = prompt("Ingrese el título de la película que desea buscar:");
   const movie = movieManager.movieDatabase.find(movie => movie.title.toLowerCase() === title.toLowerCase());
   if (movie) {
    console.log(`Detalles de la película "${movie.title}":`);
    console.table(movie);
} else {
    console.log(`No se encontró la película con el título "${title}".`);
}
  
 
}


//busqueda de peliculas por genero 
function searchMoviesByGenre() {
    const genero = prompt("Ingrese el género que desea buscar:");

    const resultado = movieManager.movieDatabase.filter(movie => movie.genre === genero);
    
    // Verificar si hay películas de dicho género
    if (resultado.length > 0) {
        console.log(`Resultado de la busqueda peliculas por "${genero}"`);
        console.table(resultado);
    } else {
        console.error(`No se encontraron películas del género "${genero}".`);
    }
}

//busqueda de peliculas por actor

function searchMoviesByActor(){
    const actor = prompt("Ingrese el nombre del actor que desea buscar:");
    const resultado = movieManager.movieDatabase.filter(movie => movie.actors.includes(actor)); 
    if (resultado.length > 0) {
        console.log(`Resultado de la busqueda peliculas por "${actor}"`);
        console.table(resultado);
    } else {
        console.error(`No se encontraron películas con el actor "${actor}".`);
    }
}

//busqueda de peliculas cuyo parametro sea un premio especifico
function searchMovieByAdward (){
    const premio = prompt("Ingrese el premio que desea buscar:");
    const resultado = movieManager.movieDatabase.filter(movie => movie.awards.includes(premio));
     
    if (resultado.length > 0) {
        console.log(`Resultado de la busqueda peliculas por "${premio}"`);
        console.table(resultado);
    } else {
        console.log(`No se encontraron películas con el premio "${premio}".`);
    }
}

//funcion que muestre todas las peliculas
function allMovies (){
    console.log("Todas las peliculas:");
    console.table(movieManager.movieDatabase);
}
//funcion que solo muestre todas las peliculas por nombre
function AllMoviesByName() {
    const movieTitles = movieManager.movieDatabase.map(movie => movie.title);
    
    console.log("Lista de todas las películas:");
    console.table(movieTitles);
}
//funcion que solo muestre todos los generos disponibles en la database
function  allGenres(){
    const genres = [];
    for (let i = 0; i < movieManager.movieDatabase.length; i++) {
        const genre = movieManager.movieDatabase[i].genre;
        if (!genres.includes(genre)) {
            genres.push(genre);
        }
    }
    console.log("Todos los generos disponibles:");

    console.log(genres);
}
//funcion que me muestre todos los premios que aparecen en la database
function allAwards() {
    const awards = [];

    for (let i = 0; i < movieManager.movieDatabase.length; i++) {
        const movieAwards = movieManager.movieDatabase[i].awards;

        for (let j = 0; j < movieAwards.length; j++) {
            if (!awards.includes(movieAwards[j])) {
                awards.push(movieAwards[j]);
            }
        }
    }

    console.log(awards);
}
//funcion que muestre todos los actores que figuran en la db
function showAllActors() {
    const allActors = [];
    for (let i = 0; i < movieManager.movieDatabase.length; i++) {
        const movie = movieManager.movieDatabase[i];

        for (let j = 0; j < movie.actors.length; j++) {
            const actor = movie.actors[j];
            if (!allActors.includes(actor)) {
                allActors.push(actor);
            }
        }
    }

    console.log("Lista de todos los actores:");
    console.table(allActors);
   
}
//funcion que ordene las peliculas de mas premiadas a menos premiadas (que no incluya las que no tienen premios)
function sortMoviesByAwards() {
    // las peliculas que no tienen premio, no se incluyen
    const moviesWithAwards = movieManager.movieDatabase.filter(movie => movie.awards.length > 0);

    // ordenar películas por la cantidad de premios
    const sortedMovies = moviesWithAwards.sort((a, b) => b.awards.length - a.awards.length);

    console.log("Películas ordenadas de más premiadas a menos premiadas:");
    console.table(sortedMovies);
}
//funcion que muestre las 10 peliculas mas premiadas
function showTop10MostAwardedMovies() {
    // Obtener todas las películas más premiadas
    const allMostAwarded = sortMoviesByAwards();//ME EQUIVOQUE DE FUNCION:sortMoviesByAwards()
    
    const top10Movies = allMostAwarded.slice(0, 10);

    console.log("Las 10 películas más premiadas:");
    console.table(top10Movies);
}


//funcion que muestre las 5 peliculas mas premiadas
function showTop5MostAwardedMovies() {
    
    const allMostAwarded = sortMoviesByAwards();//lo mismo: sortMoviesByAwar

    const top5Movies = allMostAwarded.slice(0, 5);

    console.log("Las 5 películas más premiadas:");
    console.table(top5Movies);
}
//funcion que muestre la pelicula mas premiada
function showMostAwardedMovie() {
    let mostAwarded = null;
    let maxAwards = 0;

    // Iterar sobre las películas en movieManager.movieDatabase
    for (let movie of movieManager.movieDatabase) {
        if (movie.awards.length > maxAwards) {
            maxAwards = movie.awards.length;
            mostAwarded = movie; // Actualizar la película más premiada
        }
    }

    // Verificar si se encontró alguna película premiada
    if (mostAwarded) {
        console.log("La película más premiada:");
        console.table(mostAwarded);
    } else {
        console.log("No hay películas premiadas.");
    }
}
//funcion que muestre peliculas mas premiadas por genero
function showMostAwardedMovieByGenre() {
    const genero = prompt("Ingrese un género de película:"); 
    let mostAwarded = null;
    let maxAwards = 0;
    for (let movie of movieManager.movieDatabase) {
        // Verificar si la película pertenece al género especificado
        if (movie.genre === genero) {
            if (movie.awards.length > maxAwards) {
                maxAwards = movie.awards.length;
                mostAwarded = movie; 
        }
    }

    if (mostAwarded) {
        console.log(`La película más premiada del género "${genero}":`);
        console.table(mostAwarded);
    } else {
        console.error(`No se encontraron películas premiadas del género "${genero}".`);
    }
}
}
function showMoviesOrderedByAwardsByGenre() {
    const genero = prompt("Ingrese un género de película:");

    
    const filteredMovies = movieManager.movieDatabase.filter(movie => movie.genre === genero);

    const sortedMovies = filteredMovies.sort((a, b) => b.awards.length - a.awards.length);

    o
    if (sortedMovies.length > 0) {
        console.log(`Películas del género "${genero}" ordenadas de mayor a menor cantidad de premios:`);
        console.table(sortedMovies);
    } else {
        console.error(`No se encontraron películas del género "${genero}".`);
    }
}

//funcion que muestre los premios de una pelicula
function showAwardsByMovie() {
    const title = prompt("Ingrese el título de la película:"); 
    const movie = movieManager.movieDatabase.find(movie => movie.title.toLowerCase() === title.toLowerCase()); 

    if (movie) {
        console.log(`Premios de la película "${movie.title}":`);
        if (movie.awards.length > 0) {
            console.table(movie.awards);
        } else {
            console.log("No tiene premios.");
        }
    } else {
        console.error(`No se encontró la película con el título "${title}".`);
    }
}
//////////////////////////////////
//menu para usuarios visitantes
function showUserMenu() {

    
    console.log("Menú principal:");
    console.log("1. Buscar película por nombre");
    console.log("2. Buscar película por actor");
    console.log("3. Buscar película por género");
    console.log("4. Ver listado de todas las películas");
    console.log("5. Ver listado de géneros");
    console.log("6. Ver listado de actores");
    console.log("7. Ver listado de premios");
    console.log("8. Ver película más premiada");
    console.log("9. Ver películas más premiadas");
    console.log("10.Ver peliculas por premio")
    console.log("0. Salir");

    const option = prompt("Seleccione una opción:");

    switch (option) {
        case '1':
            searchMovie();
            break;
        case '2':
            
            searchMoviesByActor();
            break;
        case '3':
            
            searchMoviesByGenre(); 
            break;
        case '4':
            allMovies();
            break;
        case '5':
            allGenres(); 
            break;
        case '6':
            showAllActors();
            break;
        case '7':
            allAwards(); 
        case '8':
            showMostAwardedMovie()
            break;
        case '9':
            showTop10MostAwardedMovies();
            break;    

        case '10':
            searchMovieByAdward();
            break;
        case '0':
            console.log("Saliendo del menú.");
            break;
        default:
            console.log("Opción no válida.");
            break;
    }
   
}



//////////////////////////////////
//funciones de administrador
//agregar una pelicula
function addMovie (){
    const title = prompt("Ingrese el título de la película:");
    const genre = prompt("Ingrese el género de la película:");
    const actorsInput = prompt("Ingrese los actores (separados por comas):");
    const awardsInput = prompt("Ingrese los premios (separados por comas):");

    const actors = actorsInput.split(",").map(actor => actor.trim());
    const awards = awardsInput.split(",").map(award => award.trim());

    const newMovie = {
        title: title,
        genre: genre,
        actors: actors,
        awards: awards
    };

    movieManager.movieDatabase.push(newMovie);
    console.log(`Película "${title}" agregada con éxito.`);
    console.table("Detalles de la película agregada:", newMovie);
}

//agregar un actor a una pelicula
function addActorMovie() {
    const title = prompt("Ingrese el título de la película:");
    
    // Verificar si la película que ingreso esta en sistema
    const movie = movieManager.movieDatabase.find(movie => movie.title === title);

    if (!movie) {
        console.log(`La película "${title}" no se encontró.`);
        return;
    }

    const actor = prompt("Ingrese el nombre del actor a agregar:");

    // Verificar si el actor ya está en la lista de actores
    if (movie.actors.includes(actor)) {
        console.log(`El actor "${actor}" ya está agregado a la película "${title}".`);
    } else {
        movie.actors.push(actor); // Agregar el actor
        console.log(`Actor "${actor}" agregado a la película "${title}".`);
    }

    // Imprimir la película actualizada
    console.table(movie);
}
//añadir premio a pelicula
function addAwardToMovie(title, award) {
    const movie = movieManager.movieDatabase.find(movie => movie.title.toLowerCase() === title.toLowerCase());
    if (movie) {
        // Añadir el premio a la lista de premios
        movie.awards.push(award);
        console.log(`Premio "${award}" añadido a la película "${movie.title}".`);
        console.log("Película actualizada:");
        console.table(movie);
    } else {
        console.error(`No se encontró la película con el título "${title}".`);
    }
}
//añadir actor a pelicula
function addActor(title, actor) {
    
    const movie = movieManager.movieDatabase.find(movie => movie.title.toLowerCase() === title.toLowerCase());
    if (movie) {
      
        if (!movie.actors.includes(actor)) {
           
            movie.actors.push(actor);
            console.log(`Actor "${actor}" añadido a la película "${movie.title}".`);
            console.log("Película actualizada:");
            console.table(movie);
        } else {
            console.error(`El actor "${actor}" ya está en la película "${movie.title}".`);
        }
    } else {
        console.error(`No se encontró la película con el título "${title}".`);
    }
}

//editar pelicula
function editMovie() {
    const title = prompt("Ingrese el título de la película que desea editar:"); // Solicitar el título al usuario

    // Buscar la película en la base de datos
    const movie = movieManager.movieDatabase.find(movie => movie.title.toLowerCase() === title.toLowerCase());

    // Verificar si se encontró la película
    if (movie) {
        const detailToEdit = prompt("¿Qué desea editar? (titulo, género, actores, premios)").toLowerCase();

        switch (detailToEdit) {
            case 'titulo':
                const newTitle = prompt("Ingrese el nuevo título:");
                movie.title = newTitle;
                console.log(`Título actualizado a "${newTitle}".`);
                break;
            case 'género':
                const newGenre = prompt("Ingrese el nuevo género:");
                movie.genre = newGenre;
                console.log(`Género actualizado a "${newGenre}".`);
                break;
            case 'actores':
                const newActor = prompt("Ingrese el nombre del actor a añadir:");
                addActor(title, newActor);
                break;
            case 'premios':
                const newAward = prompt("Ingrese el nombre del premio a añadir:");
                addAwardToMovie(title, newAward);
                break;
            default:
                console.log("Opción no válida.");
                return;
        }

        console.log("Película actualizada:");
        console.table(movie);
    } else {
        console.log(`No se encontró la película con el título "${title}".`);
    }
}
//eliminar actor 
function removeActor() {
    const title = prompt("Ingrese el título de la película:"); 
    const actor = prompt("Ingrese el nombre del actor a eliminar:"); 

    // Buscar la película en la base de datos
    const movie = movieManager.movieDatabase.find(movie => movie.title.toLowerCase() === title.toLowerCase());

    if (movie) {
        const actorIndex = movie.actors.indexOf(actor);
        if (actorIndex !== -1) {
            
            movie.actors.splice(actorIndex, 1);
            console.log(`Actor "${actor}" eliminado de la película "${movie.title}".`);
            console.log("Película actualizada:");
            console.table(movie);
        } else {
            console.error(`El actor "${actor}" no se encuentra en la película "${movie.title}".`);
        }
    } else {
        console.error(`No se encontró la película con el título "${title}".`);
    }
}
//eliminar premio
function removeAwardFromMovie() {
    const title = prompt("Ingrese el título de la película:"); 
    const award = prompt("Ingrese el nombre del premio a eliminar:"); 

    
    const movie = movieManager.movieDatabase.find(movie => movie.title.toLowerCase() === title.toLowerCase());

    if (movie) {
        
        const awardIndex = movie.awards.indexOf(award);
        if (awardIndex !== -1) {
            
            movie.awards.splice(awardIndex, 1);
            console.log(`Premio "${award}" eliminado de la película "${movie.title}".`);
            console.log("Película actualizada:");
            console.table(movie);
        } else {
            console.error(`El premio "${award}" no se encuentra en la película "${movie.title}".`);
        }
    } else {
        console.error(`No se encontró la película con el título "${title}".`);
    }
}
//eliminar pelicula
function removeMovie() {
    const title = prompt("Ingrese el título de la película que desea eliminar:"); 

    
    const movieIndex = movieManager.movieDatabase.findIndex(movie => movie.title.toLowerCase() === title.toLowerCase());

  
    if (movieIndex !== -1) {
      
        const removedMovie = movieManager.movieDatabase.splice(movieIndex, 1);
        console.log(`Película "${removedMovie[0].title}" eliminada correctamente.`);
        console.table(movieManager.movieDatabase); 
    } else {
        console.error(`No se encontró la película con el título "${title}".`);
    }
}
    
//funciones para editar administradores
//crear un nuevo administrador
function addAdmin() {
    const id = Number(prompt("Ingrese el ID del administrador:"));
    const name = prompt("Ingrese el nombre del administrador:");

    
    if (administrador.find(admin => admin.id === id)) {
        console.error(`El ID ${id} ya está en uso.`);
    } else {
        administrador.push({ id, name });
        console.log(`Administrador "${name}" agregado correctamente.`);
        console.table(administrador); 
    }
}
//eliminar admisnitrador
function removeAdmin() {
    const id = Number(prompt("Ingrese el ID del administrador que desea eliminar:"));

    
    const index = administrador.findIndex(admin => admin.id === id);

    // Verificar si se encontró el administrador
    if (index !== -1) {
        const removedAdmin = administrador.splice(index, 1);
        console.log(`Administrador "${removedAdmin[0].name}" eliminado correctamente.`);
        console.table(administrador); 
    } else {
        console.log(`No se encontró un administrador con el ID ${id}.`);
    }
}
//editar administrador
function editAdmin() {
    const id = Number(prompt("Ingrese el ID del administrador que desea editar:"));

    const admin = administrador.find(admin => admin.id === id);

    if (admin) {
        const newName = prompt("Ingrese el nuevo nombre del administrador:");
        admin.name = newName; 
        console.log(`Administrador con ID ${id} actualizado a "${newName}".`);
        console.table(administrador); 
        console.error(`No se encontró un administrador con el ID ${id}.`);
    }
}
//auntenticar administrador para poder acceder al menu
function autenticarAdmin() {
    const id = Number(prompt("Ingrese su ID de administrador:"));
    const name = prompt("Ingrese su nombre de administrador:");

    0
    const admin = administrador.find(admin => admin.id === id && admin.name === name);

    if (admin) {
        console.log(`Bienvenido, ${admin.name}!`);
        adminMain();
    } else {
        console.error("Credenciales incorrectas. Acceso denegado.");
    }
}
//menu principal para administradores
function adminMain() {
  
    console.log("Menú de administración:");
    console.log("1. Gestionar Administradores");
    console.log("2. Gestionar Películas");
    console.log("0. Salir");

    const option = prompt("Seleccione una opción:");

    switch (option) {
        case '1':
            adminSubMenu();
            break;
        case '2':
            movieSubMenu();
            break;
        case '0':
            console.log("Saliendo del menú.");3
            break;
        default:
            console.error("Opción no válida.");
            break;
    }
   
    }
//menu para editar administradores
    function adminSubMenu(){
     
       
        console.log("Submenú de Administradores:");
        console.log("1. Agregar administrador");
        console.log("2. Eliminar administrador");
        console.log("3. Editar administrador");
        console.log("0. Volver al menú principal")
    
        const option = prompt("Seleccione una opción:");
    
        switch (option) {
            case '1':
                addAdmin();
                break;
            case '2':
                removeAdmin();
                break;
            case '3':
                editAdmin();
                break;
            case '0':
                adminMain(); 
                break;
            default:
                console.log("Opción no válida.");
                break;
        }
    
    }
//menu para edicion de peliculas por administradores
    function movieSubMenu() {
       
       
        console.log("Submenú de Películas:");
        console.log("1. Agregar película");
        console.log("2. Editar película: añadir actores, premios, modificar genero o titulo");
        console.log("3. Eliminar película");
        console.log("4. Eliminar actor de película");
        console.log("5. Eliminar premio de película");
        console.log("0. Volver al menú principal");
    
        const option = prompt("Seleccione una opción:");
    
        switch (option) {
            case '1':
                addMovie(); 
                break;
            case '2':
                editMovie(); 
                break;
            case '3':
                removeMovie(); 
                break;
            case '4':
                removeActor(); 
           
            case '5':
                removeAwardFromMovie(); 
                break;
            case '0':
                adminMain(); 
                break;
            default:
                console.log("Opción no válida.");
                break;
        }
    
    }


export{ addMovie,
    addAwardToMovie,
    addActor,
    editMovie,
    removeActor,
    removeAwardFromMovie,
    removeMovie,
    addAdmin,
    editAdmin,
    removeAdmin,
    autenticarAdmin,
    adminMain,
    movieSubMenu,
    searchMovie,
    searchMovieByAdward,
    searchMoviesByActor,
    searchMoviesByGenre,
    allAwards,
    allGenres,
    allMovies,
    showAllActors,
    showUserMenu,
    showTop10MostAwardedMovies,
    showTop5MostAwardedMovies,
    showMostAwardedMovie,
    showMoviesOrderedByAwardsByGenre,
    sortMoviesByAwards
}
   