// FactorsList component
import React, { useState} from 'react';

// Local components
import Slider from './Slider.jsx';

// CSS
import '../styles/Slider.css';

const FactorsList = () => {

    const [checkedList, setCheckedList] = useState([]);
    const factors = [
        {id:1, name:"Fossil Fuels", value:0, start:-100, end:100, step:20},
        {id:2, name:"Vegetarianism", value:0, start:0, end:7, step:1},
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
              <div key={item.id} className="checkbox-container">
                <input type="checkbox" name="factors" value={item.name} onChange={selected}/>
                <div className="slider">
                    <Slider name={item.name} value={item.value} rangeStart={item.start} rangeEnd={item.end} step={item.step}/>
                </div>
              </div>
            );
          })}
        </div>
    )
}

export default FactorsList;