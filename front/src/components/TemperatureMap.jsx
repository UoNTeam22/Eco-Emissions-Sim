import React, { useEffect, useState } from "react";
import Map from "./Map";
import ColorKey from "./ColorKey";
import KeyItems from "./Keys";

function TemperatureMap({countries}) {
  
    return (
        countries.length === 0? <div><p>click the apply button to start</p></div>:
        <div>
            <Map countries={countries} />
            <ColorKey keyItems={[...KeyItems]} />
        </div>
    );
};

export default TemperatureMap;
