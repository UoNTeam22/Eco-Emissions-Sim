import React, { useEffect, useRef } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/Map.css";

// Map component
function Map({ countries }) {
    // Reference to map.
    const geoJson = useRef(null);

    // Calling useEffect function to load all country data together.
    useEffect(() => {
        if (geoJson.current) {
            geoJson.current.clearLayers().addData(countries);
        }
    }, [countries]);

    // Binds country name and its temperature to a country.
    const onEachCountry = (country, layer) => {
        layer.options.fillColor = country.properties.color;
        const name = country.properties.ADMIN;
        const temperature = country.properties.temperature;
        layer.bindPopup(`${name}: ${Number.parseFloat(temperature).toFixed(2)}°C`);
    };

    // Loads until all country data is processed.
    return (
        <div>
            {countries.length === 0 ? (
                <div className="load-container">Loading...</div>
            ) : (
            <div>
                <MapContainer className="map-container" zoom={2} center={[20, 0]}>
                    <GeoJSON
                        ref={geoJson} 
                        className="map-style" 
                        data={countries} 
                        onEachFeature={onEachCountry} 
                    />
                </MapContainer>
            </div>
          )}
        </div>

        
    );

};

export default Map;