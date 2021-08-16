import ListOfMovies from "../components/ListOfMovies";
import { useState } from "react";
import ModalCreateMovie from "../services/moviesHome/ModalCreateMovie";
import { getMovies } from "../services/moviesHome/getMovies";

export default function Home(){
    const [movies, setMovies] = useState(getMovies)
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