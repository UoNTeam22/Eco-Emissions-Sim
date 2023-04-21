import React from "react";
import Map from "./Map";
import ColorKey from "./ColorKey";
import KeyItems from "./Keys";

function TemperatureMap({countries}) {

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
