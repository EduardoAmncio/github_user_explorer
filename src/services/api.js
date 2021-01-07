import axios from 'axios';

export const apiGit = axios.create({
  baseURL: 'https://api.github.com',
});

export const apiMapBox = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
});


