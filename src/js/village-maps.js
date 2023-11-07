mapboxgl.accessToken = "pk.eyJ1IjoiaGFpZGFyMDM4IiwiYSI6ImNrd205Z2g2dTBlMW4yb253Mjh4djN2dHgifQ.6wD-gPHu7BfTxrSI_2YoyQ";

// TODO ======= Kalumpang =======
const map1 = new mapboxgl.Map({
    container: "map1", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: [127.380995, 0.78964], // starting position [lng, lat]
    zoom: 13.5, // starting zoom
});

const kalumpang = new mapboxgl.Marker().setLngLat([127.380995, 0.78964]).addTo(map1);

// Add zoom and rotation controls to the map.
map1.addControl(new mapboxgl.NavigationControl());

map1.on("load", function () {
    map1.resize();
});

// TODO ======= Sasa =======
const map2 = new mapboxgl.Map({
    container: "map2", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: [127.32647282192244, 0.7553337759907618], // starting position [lng, lat]
    zoom: 13.5, // starting zoom
});

const sasa = new mapboxgl.Marker().setLngLat([127.32647282192244, 0.7553337759907618]).addTo(map2);

// Add zoom and rotation controls to the map.
map2.addControl(new mapboxgl.NavigationControl());

map2.on("load", function () {
    map2.resize();
});

// TODO ======= Fora =======
const map3 = new mapboxgl.Map({
    container: "map3", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: [127.31852, 0.771626], // starting position [lng, lat]
    zoom: 13.5, // starting zoom
});

const fora = new mapboxgl.Marker().setLngLat([127.31852, 0.771626]).addTo(map3);

// Add zoom and rotation controls to the map.
map3.addControl(new mapboxgl.NavigationControl());

map3.on("load", function () {
    map3.resize();
});

// TODO ======= Tubo =======
const map4 = new mapboxgl.Map({
    container: "map4", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: [127.3745, 0.826587], // starting position [lng, lat]
    zoom: 13.5, // starting zoom
});

const tubo = new mapboxgl.Marker().setLngLat([127.3745, 0.826587]).addTo(map4);

// Add zoom and rotation controls to the map.
map4.addControl(new mapboxgl.NavigationControl());

map4.on("load", function () {
    map4.resize();
});

// TODO ======= Kulaba =======
const map5 = new mapboxgl.Map({
    container: "map5", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: [127.360327, 0.844671], // starting position [lng, lat]
    zoom: 13.5, // starting zoom
});

const kulaba = new mapboxgl.Marker().setLngLat([127.360327, 0.844671]).addTo(map5);

// Add zoom and rotation controls to the map.
map5.addControl(new mapboxgl.NavigationControl());

map5.on("load", function () {
    map5.resize();
});

// TODO ======= Santiong =======
const map6 = new mapboxgl.Map({
    container: "map6", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: [127.381898, 0.790484], // starting position [lng, lat]
    zoom: 13.5, // starting zoom
});

const santiong = new mapboxgl.Marker().setLngLat([127.381898, 0.790484]).addTo(map6);

// Add zoom and rotation controls to the map.
map6.addControl(new mapboxgl.NavigationControl());

map6.on("load", function () {
    map6.resize();
});

// TODO ======= Fitu =======
const map7 = new mapboxgl.Map({
    container: "map7", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: [127.341717, 0.762043], // starting position [lng, lat]
    zoom: 13.5, // starting zoom
});

const fitu = new mapboxgl.Marker().setLngLat([127.341717, 0.762043]).addTo(map7);

// Add zoom and rotation controls to the map.
map7.addControl(new mapboxgl.NavigationControl());

map7.on("load", function () {
    map7.resize();
});
