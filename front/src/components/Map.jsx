// Map component
import React, { Component } from 'react';
import { MapContainer, GeoJSON } from "react-leaflet";
import mapData from "./../data/countries.json";
import "leaflet/dist/leaflet.css";

class Map extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <h1>Map</h1>
                {/* Do not understand why this is not working!
                <MapContainer zoom={2} center={[20, 100]}>
                    <GeoJSON data={mapData.features} />
                </MapContainer>
                */}
            </React.Fragment>
        );
    }
}

export default Map;