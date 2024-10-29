import prompt_sync from 'prompt-sync';
import{administrador,movieManager} from "./arreglosActorMovies.js"
import{ addMovie,
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
    showMoviesOrderedByAwardsByGenre} from "./funcionalidades.js"
const prompt = prompt_sync();




    function showMainMenu() {
        let option;
    
        do {
            console.log("Bienvenido al Sistema de Gestion de actores, peliculas y premios");
            console.log("1. Ingresar como Administrador");
            console.log("2. Acceder como Visitante");
            console.log("0. Salir");
    
            option = prompt("Seleccione una opción:");
    
            switch (option) {
                case '1':
                    autenticarAdmin();
                    break;
                case '2':
                    showUserMenu();
                    break;
                case '0':
                    console.log("Saliendo de la aplicación.");
                    break;
                default:
                    console.log("Opción no válida. Intente nuevamente.");
                    break;
            }
        } while (option !== '0');
    }
    
   
    showMainMenu();
        
     


