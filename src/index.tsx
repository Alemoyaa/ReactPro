import React from 'react';
import ReactDOM from 'react-dom';
import { Mapps } from './Mapps';

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
