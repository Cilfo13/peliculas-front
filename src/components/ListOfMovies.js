import "./ListOfMovies.js"
import {Movie} from "./Movie.js"

export default function ListOfMovies({movies, setMovies, newMovie, setNewMovie}){

    return (
        <div>
            <h1>Peliculas para ver</h1>
            <ol className="container_movies">
                {movies
                .map((movie)=> <Movie 
                                key={movie.id} 
                                movieId={movie.id} 
                                title={movie.title} 
                                movies={movies} 
                                setMovies={setMovies} 
                                newMovie={newMovie}
                                setNewMovie={setNewMovie}
                            />)}
            </ol>
        </div>
    )
}
