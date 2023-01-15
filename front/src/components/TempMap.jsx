import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Map from "./Map";

const TempMap = () => {
    
    const [countries, setCountries] = useState([]);

    const load = () => {
    
    };

    useEffect(load, []);

    return (
    <div>
        {countries.length === 0 ? (
        <Loading />
        ) : (
        <div>
            <Map countries={countries} />
        </div>
        )}
    </div>
    );
};

export default TempMap;