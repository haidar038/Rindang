mapboxgl.accessToken = "pk.eyJ1IjoiaGFpZGFyMDM4IiwiYSI6ImNrd205Z2g2dTBlMW4yb253Mjh4djN2dHgifQ.6wD-gPHu7BfTxrSI_2YoyQ";
const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: [127.380995, 0.78964], // starting position [lng, lat]
    zoom: 13.5, // starting zoom
});

const marker1 = new mapboxgl.Marker().setLngLat([127.380995, 0.78964]).addTo(map);

const layerList = document.getElementById("menu");
const inputs = layerList.getElementsByTagName("input");

for (const input of inputs) {
    input.onclick = (layer) => {
        const layerId = layer.target.id;
        map.setStyle("mapbox://styles/mapbox/" + layerId);
    };
}

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

map.on("load", function () {
    map.resize();
});
