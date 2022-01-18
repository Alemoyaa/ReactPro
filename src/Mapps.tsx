import { PlacesProvider } from "./context/index"
import { HomePage } from "./screens"

import './styles.css'

export const Mapps = () => {
    return (
        <PlacesProvider>
            <HomePage />
        </PlacesProvider>
    )
}