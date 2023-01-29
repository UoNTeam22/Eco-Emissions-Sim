import React, { useState, useEffect } from "react";
import Map from "./Map";
import LoadTemperature from "./LoadTemperatures";
import ColorKey from "./ColorKey";
import KeyItems from "./Keys";

const TemperatureMap = () => {
  
  const [countries, setCountries] = useState([]);

  const load = () => {
    const loadTemperature = new LoadTemperature();
    loadTemperature.load((countries) => setCountries(countries));
  };

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
