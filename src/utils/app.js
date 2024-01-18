import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3/'
const TMDB_TOKEN =  import.meta.env.VITE_APP_TMDB_TOKEN

export const fetchDataFromApi = async (url, params) => {
    try {
        let {data} = await axios.get(BASE_URL + url, {
            headers: {
                Authorization: `Bearer ${TMDB_TOKEN}`
            },
            params
        });
        return data;
    } catch(error) {
        console.log(error)
        return error
    }
}