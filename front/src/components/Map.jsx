import React, { useEffect, useRef } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/Map.css";

/**
 * Map component
 * @param {*} countries 
 * @returns 
 */
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
        let name = country.properties.ADMIN;
        let temperature = country.properties.temperature;

        // Check if the temperature is NaN
        if (!temperature) {
            layer.bindPopup(`${name}: No data`);
            return;
        }

        // Fix it to 2 decimal places.
        temperature = Number.parseFloat(temperature).toFixed(2)

        // Bind the popup to the country.
        layer.bindPopup(`${name}: ${temperature}°C`);
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