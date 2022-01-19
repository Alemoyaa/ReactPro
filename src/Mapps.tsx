import { MapProvider, PlacesProvider } from "./context/index"
import { HomePage } from "./screens"
import 'mapbox-gl/dist/mapbox-gl.css';

import './styles.css'

export const Mapps = () => {
    return (
        <PlacesProvider>
            <MapProvider>
                <HomePage />
            </MapProvider>
        </PlacesProvider>
    )
}