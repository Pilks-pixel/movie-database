const movieData = require('../data');

class movie {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.actor = data.actor;
        this.production_year = data.production_year;

    }

    static get all() {
        const movies = movieData.map((m) => new movie(m));
        return movies;
    }

    static findById(id) {
        const movieId = movieData.filter((movie) => movie.id === id)[0];
        return movieId;
    }

    static create(data) {
        const newMovieId = movieData.length + 1;
        const newMovie = new movie({ id: newMovieId, ...data});
        movieData.push(newMovie);
        return newMovie
    }

    // static destroy(data) {
    //     const movieId = movieData.filter((movie) => movie.id === id)[0];
    //     delete movieId;
    // }
}


module.exports = movie;