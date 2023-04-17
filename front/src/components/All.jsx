import { useEffect, useState } from "react";
import * as React from "react";
import Player from "./Player";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import View from "./View";
import PlayerService from "./PlayerService";
import LoadTemperature from "./LoadTemperatures";

function All() {
  //create some states to use
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [year, setYear] = useState(2023);
  const [combinedPlayerData, setCombinedPlayerData] = useState([]);

  //call this function on page load to have some data there by default
  useEffect(() => {
    callCombinedData();
  }, []);

  //call service class to get some data
  function callCombinedData() {
    console.debug('Retrieving data for year: ' + year);
    const loadTemperature = new LoadTemperature();
    loadTemperature.load((countries) => {
      setCombinedPlayerData(countries);
      console.debug("Recieved data back:", countries);
    }, year);
  }

  //create some nicer state variables to lower prop count
  const heightState = {
    setValue: height,
    setFunction: setHeight,
  };

  const weightState = {
    setValue: weight,
    setFunction: setWeight,
  };

  const yearState = {
    setValue: year,
    setFunction: setYear,
  };

  const allSliderStates = [
    heightState,
    weightState,
    yearState,
  ];

  return (
    <>
      {/* <Sidebar sliderStates={allSliderStates} />
      <Player combinedPlayerData={combinedPlayerData} />
      <input type="button" onClick={callCombinedData} value="Apply" /> */}
      <Navbar />
      <Sidebar sliderStates={allSliderStates} onApply={callCombinedData}/>
      <View sliderStates={allSliderStates} combinedPlayerData={combinedPlayerData}/>
    </>
  );
}

export default All;
