import L from "leaflet";
import "leaflet/dist/leaflet.css";
import places from "./placeses";
import marker_icon from "leaflet/dist/images/marker-icon.png"

const marker_icon_inst = L.icon({
    iconUrl: marker_icon,

});




const map = L.map('map').setView([51.501224, 45.944021], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

places.forEach((place)=> {
   L.marker([place.lat,place.long], { icon: marker_icon_inst}).addTo(map)
});


