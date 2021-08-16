import axios from "axios";

export const postMovie = ({title})=>{
    return axios
    .post("https://blooming-shore-60109.herokuapp.com/api/notes", {title})
    .then(response =>{
        const {data} = response
        return data
    })
}