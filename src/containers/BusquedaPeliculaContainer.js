import {MovieSearch} from "../components/MovieSearch"
import { useEffect ,useState } from "react";
import { getAllMovies } from "../services/moviesSearch/getAllMovies";
import { searchMovie } from "../services/moviesSearch/searchMovie.js";

export default function BusquedaPeliculaContainer(){
    const [movies, setMovies] = useState([])
    const [newMovie, setNewMovie] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        getAllMovies(newMovie)
        .then(notes=>{
            setMovies(notes)
            setLoading(false)
        })
    }, [newMovie])

    

    const handleChange = (event) =>{
        setNewMovie(event.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        const movieToAddToState ={
            title: newMovie,
            body: newMovie,
            userId: 1
        }

        searchMovie(movieToAddToState)
        .then(newNote =>{
            setMovies(prevNotes => prevNotes.concat(newNote))
        })
        //setMovies([...movies, movieToAddToState])
        setNewMovie("");
    }    
    return (
        <div>
            <h1>Movies</h1>
            <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange} value={newMovie} ></input>
                    <button>Buscar pelicula</button>
            </form>
            {
                loading ? "Cargando...":""
            }
            <ol>
                {
                    movies
                    .map((movie)=> {
                        return(
                            <MovieSearch key={movie.id} {...movie} />
                        )
                    }
                    )
                }
            </ol>
        </div>
    )
}
