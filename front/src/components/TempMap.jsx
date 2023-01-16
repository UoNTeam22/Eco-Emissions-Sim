import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Map from "./Map";
import LoadTemp from "./LoadTemp";
import ColorKey from "./ColorKey";
import KeyItems from "./Keys";

const TempMap = () => {
  
  const [countries, setCountries] = useState([]);

  const load = () => {
    const loadTemp = new LoadTemp();
    loadTemp.load((countries) => setCountries(countries));
  };

  useEffect(load, []);

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <Map countries={countries} />
          <ColorKey keyItems={[...KeyItems]} />
        </div>
      )}
    </div>
  );
};

export default TempMap;
