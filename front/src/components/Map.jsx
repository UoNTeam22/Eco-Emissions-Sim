// Map component

import React, { useEffect, useRef } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/Map.css";

const Map = ({ countries }) => {

    const geoJson = useRef(null);

    useEffect(() => {
        if (geoJson.current) {
            geoJson.current.clearLayers().addData(countries);
        }
    }, [countries]);

    const onEachCountry = (country, layer) => {
        layer.options.fillColor = country.properties.color;
        const name = country.properties.ADMIN;
        const temperature = country.properties.temperature;
        layer.bindPopup(`${name}: ${Number.parseFloat(temperature).toFixed(2)}°C`);
    };

    return (
        <MapContainer className="map-container" zoom={2} center={[20, 0]}>
            <GeoJSON
                ref={geoJson} 
                className="map-style" 
                data={countries} 
                onEachFeature={onEachCountry} 
            />
        </MapContainer>
    );

};

export default Map;