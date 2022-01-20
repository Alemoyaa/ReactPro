import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiYWxlbW95YSIsImEiOiJja3lscHM1cDQyMWU4MnVvNjB5dnFhdHN4In0.lI5ZHex2U-hu4m1n0rJ7Og'
    }
})

export default searchApi;