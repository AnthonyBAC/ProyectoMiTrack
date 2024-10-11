function initMap() {
    const map = L.map('map').setView([51.505, -0.09], 13); // Vista inicial

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: ''
    }).addTo(map);

    // Verificar si la geolocalización está disponible
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                // Centrar el mapa en la ubicación actual
                map.setView([lat, lon], 13);

                // Agregar un marcador en la ubicación actual
                L.marker([lat, lon]).addTo(map)
                    .bindPopup('Ubicación actual.')
                    .openPopup();
            },
            () => {
                alert('No se pudo obtener la ubicación.');
            }
        );
    } else {
        alert('La geolocalización no es compatible con este navegador.');
    }
}

// Llamar a la función initMap
initMap();