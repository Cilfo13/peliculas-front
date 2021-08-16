import axios from "axios"

export const getMovies = ()=>{
    return axios.get("https://blooming-shore-60109.herokuapp.com/api/notes")
    .then(response=>{
        console.log(response)
        const {data} = response
        console.log(data)
        return data
    })
}