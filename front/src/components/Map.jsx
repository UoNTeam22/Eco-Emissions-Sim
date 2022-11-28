// Map component
import React, { Component } from 'react';
import { MapContainer, GeoJSON } from "react-leaflet";
import mapData from "./../data/countries.json";
import "leaflet/dist/leaflet.css";
import "./../styles/Map.css";

class Map extends Component {
    state = {}

    countryStyle = {
        fillColor: "red",
        fillOpacity: 1,
        color: "black",
        weight: 1,
    };

    onEachFeature = (country, layer) => {
        const countryName = country.properties.ADMIN;
        layer.bindPopup(countryName);
    }

    render() {
        return (
            <React.Fragment>
                <MapContainer style={{height: "80vh", width: "160vh"}} zoom={2} center={[0,0]}>
                    <GeoJSON
                        style={this.countryStyle}
                        data={mapData.features}
                        onEachFeature={this.onEachFeature}
                    />
                </MapContainer>
            </React.Fragment>
        );
    }
}

export default Map;