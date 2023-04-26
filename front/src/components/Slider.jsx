// Slider component to create factor sliders with different ranges.
function Slider({ sliderState, minRange, maxRange, step }) {
    
    // Sets slider value using its state.
    function updateSetFunction(event) {
        sliderState.setFunction(Number(event.target.value));
    }

    return (
        <div>
            <input
                type="range"
                min={minRange}
                max={maxRange}
                value={sliderState.setValue}
                step={step}
                onChange={updateSetFunction}
            />
        </div>
    );
}

export default Slider;
