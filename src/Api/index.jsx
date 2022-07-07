import axios from "axios"

const Api = axios.create({
    baseURL: "https://api-na-medida-atelie.herokuapp.com"
})

export default Api
