import axios from "axios";

export default axios.create({
    baseURL: "https://api.tmdb.org/3",
    params: {
        api_key: "76b6f6be987b6fc1ab4c8de0b43e619c",
    }
})