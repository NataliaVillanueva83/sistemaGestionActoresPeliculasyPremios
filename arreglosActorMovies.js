const actors = [
    { id: 1, name: "Christopher Nolan" },
    { id: 2, name: "Johnny Depp" },
    { id: 3, name: "Anthony Hopkins" },
    { id: 4, name: "Chris Evans" },
    { id: 5, name: "Yannick Fassbender" },
    { id: 6, name: "Ryan Reynolds" },
    { id: 7, name: "Frank Capra" },
    { id: 8, name: "Laurence Fishburne" },
    { id: 9, name: "Quentin Tarantino" },
    { id: 10, name: "Anurag Kashyap" }
];


const movieManager= { movie: [
   { title: "Inception",
    genre: "Thriller",
    actors: ["Christopher Nolan", "Johnny Depp"],
    awards: ["Oscar", "Golden Globe", "Academy Award"]
   },
   { title: "The Dark Knight",
    genre: "Action",
    actors: ["Christopher Nolan", "Anthony Hopkins", "Chris Evans"],
    awards: ["Oscar", "Academy Award"]
   },
   {
    title: "Eternal Sunshine of the Spotless Mind",
    genre: "Romance",
    actors: ["Yannick Fassbender", "Ryan Reynolds"],
    awards: ["Golden Globe", "Academy Award"]
   },
   {
    title: "Casablanca",
    genre: "Drama",
    actors: ["Frank Capra", "Laurence Fishburne"],
    awards: ["Oscar", "Golden Globe"]
   },
   {
    title: "Pulp Fiction",
    genre: "Crime",
    actors: ["Quentin Tarantino", "Anurag Kashyap"],
    awards: ["Oscar", "Golden Globe"]
   },
   {
    title: "The Godfather",
    genre: "Crime",
    actors: ["Francis Ford Coppola", "Al Pacino"],
    awards: ["Oscar", "Golden Globe"]

   },
   {
    title: "Star Wars: Episode IV - A New Hope",
    genre: "Action",
    actors: ["George Lucas", "Christopher Nolan", "Dave Chappelle"],
    awards: ["Oscar", "Golden Globe"]
   },
   {
    title: "Memento",
    genre: "Thriller",
    actors: ["Frank Darabont", "Laurence Fishburne"],
    awards: ["Oscar", "Golden Globe"]
   
   },
   {
    title: "The Shawshank Redemption",
    genre: "Drama",
    actors: ["Frank Darabont", "Christopher Nolan"],
    awards: ["Oscar", "Golden Globe"]
   },
   {
    title: "The Departed",
    genre: "Thriller",
    actors: ["Christopher Nolan", "Ryan Reynolds", "Josh Hutcherson"],
    awards: ["Oscar", "Golden Globe"]
   },
   {
    title: "Forrest Gump",
    genre: "Comedy",
    actors: ["Christopher Nolan", "Morgan Freeman"],
    awards: ["Oscar", "Golden Globe"]
   },

], 
addMovie: function(title, genre, actors) {
        const movie = {
            title: title,
            genre: genre,
            actors: actors,
            awards: [],
            getAwardsCount: function() {
                return this.awards.length;
            },
            addAward: function(award) {
                this.awards.push(award);
            }
        };
        this.movies.push(movie);
    },
    deleteMovie: function(title){
        const index = this.movies.findIndex(movie => movie.title === title);
        if(index!== -1) {
            this.movies.splice(index, 1);
        }
    },
    addActor: function(title,actor){
        const movie = this.movies.find(movie => movie.title === title);
        if(movie){
            movie.actors.push(actor);
        }
    },
    editMovie: function(title){
        const index = this.movies.findIndex(movie => movie.title === title);
        if(index!== -1) {
            const newMovie = prompt("Ingrese los nuevos datos de la pelicula");
            this.movies[index] = newMovie;
        }
    }
}


//funcion para agregar peliculas sea desde el administrador

movieManager.addMovie("The Godfather Part II", "Crime", ["Francis Ford Coppola", "Al Pacino"]);