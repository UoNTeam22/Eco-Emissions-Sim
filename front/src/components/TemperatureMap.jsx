import React from "react";
import Map from "./Map.jsx";
import ColorKey from "./ColorKey.jsx";
import KeyItems from "./Keys.js";

// Temperature Map component containing map and its colour key.
function TemperatureMap({countries}) {
    return (
        <div>
            <Map countries={countries} />
            <ColorKey keyItems={[...KeyItems]} />
        </div>
    );
};

export default TemperatureMap;