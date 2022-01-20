import axios from 'axios';

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,

        access_token: 'pk.eyJ1IjoiYWxlbW95YSIsImEiOiJja3lscHM1cDQyMWU4MnVvNjB5dnFhdHN4In0.lI5ZHex2U-hu4m1n0rJ7Og'
    }
})

export default directionsApi;