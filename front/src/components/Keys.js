import KeyItem from "./KeyItem";

var keyItems = [

  new KeyItem(
    "< 0",
    "#006EE6",
    (temp) => temp < 0
  ),

  new KeyItem(
    "0 - 4",
    "#68CBF8",
    (temp) => temp >= 0 && temp < 5
  ),

  new KeyItem(
    "5 - 9",
    "#90EE90",
    (temp) => temp >= 5 && temp < 10
  ),

  new KeyItem(
    "10 - 14",
    "#FFFF00",
    (temp) => temp >= 10 && temp < 15,
  ),

  new KeyItem(
    "15 - 19",
    "#FAD000",
    (temp) => temp >= 15 && temp < 20,
  ),

  new KeyItem(
    "20 - 24",
    "#FA7500",
    (temp) => temp >= 20 && temp < 25,
  ),

  new KeyItem(
    "25 - 29",
    "#D90202",
    (temp) => temp >= 25 && temp < 30,
  ),

  new KeyItem(
    ">= 30",
    "#8B0000",
    (temp) => temp >= 30,
  ),

  new KeyItem(
    "No Data",
    "#BEBEBE",
    (temp) => true
  ),

];

export default keyItems;