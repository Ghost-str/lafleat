import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './app-styles.css';
import places from './placeses';
import marker_icon from 'leaflet/dist/images/marker-icon.png';
import telegramSdk from './telegram-sdk';

const markerIconInst = L.icon({
	iconUrl: marker_icon,
	iconSize: [25, 41],
	iconAnchor: [13, 40],
	popupAnchor: [0, -25],
});

const map = L.map('map');

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '© OpenStreetMap',
}).addTo(map);

places.forEach((place) => {
	L.marker([place.lat, place.long], {icon: markerIconInst})
		.bindPopup(
			`${place.addres} </br>
		Часы работы: От заката и до рассвета`
		)
		.addTo(map);
});
map.setView([51.501224, 45.944021], 18);

telegramSdk.ready();
