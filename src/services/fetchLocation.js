const endpoint = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp';

const fetchLocation = () => {
    return fetch(endpoint).then(response => response.json());
};

export {fetchLocation};