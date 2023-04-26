import React from "react";
import Map from "./Map.jsx";
import ColourKey from "./ColourKey.jsx";
import KeyItems from "./Keys.js";

// Temperature Map component containing map and its colour key.
function TemperatureMap({ countries }) {
    return (
        <div>
            <Map countries={countries} />
            <ColourKey keyItems={[...KeyItems]} />
        </div>
    );
};

export default TemperatureMap;