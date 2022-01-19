import React from 'react';
import ReactDOM from 'react-dom';
import { Mapps } from './Mapps';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 
'pk.eyJ1IjoiYWxlbW95YSIsImEiOiJja3lscHM1cDQyMWU4MnVvNjB5dnFhdHN4In0.lI5ZHex2U-hu4m1n0rJ7Og'

if (!navigator.geolocation) {
  alert('Tu navegador no tiene opcion de Geolocation')
  throw new Error("Tu navegador no tiene opcion de Geolocation");
}

ReactDOM.render(
  <React.StrictMode>
    <Mapps />
  </React.StrictMode>,
  document.getElementById('root')
);
