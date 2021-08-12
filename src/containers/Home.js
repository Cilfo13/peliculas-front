import ListOfMovies from "../components/ListOfMovies";
import { useState } from "react";
import ModalCreateMovie from "../services/moviesHome/ModalCreateMovie";

export default function Home(props){
    const [movies, setMovies] = useState(props.movies)
    const [newMovie, setNewMovie] = useState("");

    return(
        <div>
            <ModalCreateMovie
                movies={movies}
                setMovies={setMovies}
                newMovie={newMovie}
                setNewMovie={setNewMovie}
            />
            <ListOfMovies 
                movies={movies}
                setMovies={setMovies}
                newMovie={newMovie}
                setNewMovie={setNewMovie}
            />
        </div >
    )
}