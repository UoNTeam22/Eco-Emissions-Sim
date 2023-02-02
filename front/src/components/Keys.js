class KeyItem {
  constructor(title, color, bounds) {
    this.title = title;
    this.color = color;
    this.bounds = bounds;
  }
}

var keyItems = [

  new KeyItem(
    "< 0°C",
    "#006EE6",
    (temperature) => temperature < 0
  ),

  new KeyItem(
    "0°C - 4°C",
    "#68CBF8",
    (temperature) => temperature >= 0 && temperature < 5
  ),

  new KeyItem(
    "5°C - 9°C",
    "#90EE90",
    (temperature) => temperature >= 5 && temperature < 10
  ),

  new KeyItem(
    "10°C - 14°C",
    "#FFFF00",
    (temperature) => temperature >= 10 && temperature < 15,
  ),

  new KeyItem(
    "15°C - 19°C",
    "#FAD000",
    (temperature) => temperature >= 15 && temperature < 20,
  ),

  new KeyItem(
    "20°C - 24°C",
    "#FA7500",
    (temperature) => temperature >= 20 && temperature < 25,
  ),

  new KeyItem(
    "25°C - 29°C",
    "#D90202",
    (temperature) => temperature >= 25 && temperature < 30,
  ),

  new KeyItem(
    ">= 30°C",
    "#8B0000",
    (temperature) => temperature >= 30,
  ),

  new KeyItem(
    "No Data",
    "#BEBEBE",
    (temperature) => true
  ),

];

export default keyItems;