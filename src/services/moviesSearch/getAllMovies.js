import axios from "axios"

export const getAllMovies = (search)=>{
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=09a7306244229aa949d0817095d6ecb8&language=en-US&page=1&include_adult=false&query=${search}`)
    .then(response=>{
        console.log(response)
        const {data} = response
        const {results} = data
        return results
    })
}