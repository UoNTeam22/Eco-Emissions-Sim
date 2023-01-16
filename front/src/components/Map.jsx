// Map component

import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/Map.css";

const Map = ({ countries }) => {

  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };

  const onEachCountry = (country, layer) => {
    layer.options.fillColor = country.properties.color;
    const name = country.properties.ADMIN;
    const text = country.properties.text;
    layer.bindPopup(`${name}: ${text}`);
  };

  return (
    <MapContainer style={{ height: "80vh", width: "78vw"}} zoom={2} center={[20, 0]}>
      <GeoJSON
        style={mapStyle}
        data={countries}
        onEachFeature={onEachCountry}
      />
    </MapContainer>
  );

};

export default Map;