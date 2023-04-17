import React, { useState, useEffect } from "react";
import Map from "./Map";
import LoadTemperature from "./LoadTemperatures";
import ColorKey from "./ColorKey";
import KeyItems from "./Keys";

function TemperatureMap({ sliderStates }, { combinedPlayerData }) {
    //const countries = combinedPlayerData; // This data is undefined?
    const [countries, setCountries] = useState([]);

    function load() {
        const loadTemperature = new LoadTemperature();
        const timescale = sliderStates[sliderStates.length - 1];
        loadTemperature.load((countries) => setCountries(countries), timescale.setValue);
    };

    /** useEffect: Perform side effect for loading the correct country colors according to key. */
    useEffect(load, []);

    return (
        <div>
            {countries.length === 0 ? (
                <div
                    style={{
                        height: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    Loading...
                </div>
            ) : (
                <div>
                    <Map countries={countries} />
                    <ColorKey keyItems={[...KeyItems]} />
                </div>
            )}
        </div>
    );
};

export default TemperatureMap;
