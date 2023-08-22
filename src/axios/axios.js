import axios from "axios";

const API = axios.create({
    baseURL : "https://api.themoviedb.org/3/tv/"
});

export default API;