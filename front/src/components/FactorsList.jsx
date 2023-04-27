import React, { useState } from "react";
import Slider from "./Slider.jsx";
import "../styles/Slider.css";
import "../styles/FactorsList.css";

// FactorLists component to keep track of selected factors.
function FactorsList({ sliderStates, factorListStates }) {

    // Fators list with start, end and step values for each factor.
    // Used to create slider for each factor.
    const factors = [
        { id: 1, name: "Fossil Fuels", value: 0, start: -100, end: 100, step: 20, units: "%" },
        { id: 2, name: "Vegetarianism", value: 0, start: 0, end: 7, step: 1, units: "days" },
    ];

    // Maintains list of selected factors.
    const selected = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;
        if (isChecked) {
            // Add checked item into factors list.
            const newList = factorListStates.setValue.concat([value]);
            factorListStates.setFunction(newList);
        } else {
            // Remove unchecked item from factors list.
            const filteredList = factorListStates.setValue.filter((item) => item !== value);
            factorListStates.setFunction(filteredList);
        }
    };

    // Mapping factors list to create silders.
    return (
        <div className="card-body">
            {factors.map((item, index) => {
                // Get the slider state.
                let sliderState = sliderStates[index];
                // Sometimes the sliders are not ready yet.
                if (!sliderState) return null;
                // Returing factor name and slider for each factor.
                return (
                    <div key={item.id} className="checkbox-wrapper">
                        <div className="checkbox-name">
                            <input type="checkbox" name="factors" value={item.name} onChange={selected} />
                            <h1 className="name">{item.name}: {sliderState.setValue} {item.units}</h1>
                        </div>
                        <div className="slider">
                            <Slider sliderState={sliderState} minRange={item.start} maxRange={item.end} step={item.step} />
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default FactorsList;