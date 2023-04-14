// FactorsList component
import React, { useState} from 'react';

// Local components
import Slider from './Slider.jsx';
import NewSlider from './NewSlider.jsx';
// CSS
import '../styles/Slider.css';
import '../styles/FactorsList.css';

function FactorsList({ sliderStates }) {

  const [checkedList, setCheckedList] = useState([]);
  const factors = [
    {id:1, name:"Fossil Fuels", value:0, start:-100, end:100, step:20, units:"%"},
    {id:2, name:"Vegetarianism", value:0, start:0, end:7, step:1, units:"days"},
  ];

  const selected = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if(isChecked) {
      //Add checked item into checkList
      setCheckedList([...checkedList, value]);
    } else {
      //Remove unchecked item from checkList
      const filteredList = checkedList.filter((item) => item !== value);
      setCheckedList(filteredList);
    }
    console.log(checkedList);
  };

  return (
    <div className="card-body">
      {factors.map((item, index) => {
        return (
          <div key={item.id} className="checkbox-wrapper">
            <div className="checkbox-name">
              <input type="checkbox" name="factors" value={item.name} onChange={selected}/>
              <h1 className="name">{item.name}: {sliderStates[index].setValue} {item.units}</h1>
            </div>
            <div className="slider">
              <NewSlider sliderState={sliderStates[index]} minRange={item.start} maxRange={item.end} step={item.step}/>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default FactorsList;