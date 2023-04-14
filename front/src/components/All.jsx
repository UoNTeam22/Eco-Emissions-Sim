import { useEffect, useState } from "react";
import * as React from "react";
import Player from "./Player";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import View from "./View";
import PlayerService from "./PlayerService";

function All() {
  //create some states to use
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [year, setYear] = useState(2020);
  const [combinedPlayerData, setCombinedPlayerData] = useState(0);

  //call this function on page load to have some data there by default
  useEffect(() => {
    callCombinedData();
  }, []);

  //call service class to get some data
  function callCombinedData() {
    const playerService = new PlayerService();
    const res = playerService.combinePlayerData(height, weight, year);
    setCombinedPlayerData(res);
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
      <Sidebar sliderStates={allSliderStates}/>
      <View />
    </>
  );
}

export default All;
