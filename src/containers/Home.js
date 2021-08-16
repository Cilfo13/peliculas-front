import ListOfMovies from "../components/ListOfMovies";
import { useState } from "react";
import ModalCreateMovie from "../services/moviesHome/ModalCreateMovie";
import { getMovies } from "../services/moviesHome/getMovies";
import { useEffect } from "react";

export default function Home(){
    const [movies, setMovies] = useState([])
    const [newMovie, setNewMovie] = useState("");

    useEffect(()=>{
        getMovies(newMovie)
        .then(mov=>{
            setMovies(mov)
        })
    }, [])

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