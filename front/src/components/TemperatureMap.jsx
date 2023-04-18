import React from "react";
import Map from "./Map";
import ColorKey from "./ColorKey";
import KeyItems from "./Keys";

function TemperatureMap({countries}) {

    return (
        <div>
            <Map countries={countries} />
            <ColorKey keyItems={[...KeyItems]} />
        </div>
    );
};

export default TemperatureMap;
