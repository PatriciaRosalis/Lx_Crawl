import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App.jsx';
import 'mapbox-gl/dist/mapbox-gl.css' // Import of Mapbox CSS
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'

// ...
// Inform your Mapbox token (https://www.mapbox.com/account/)
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
// registerServiceWorker();
