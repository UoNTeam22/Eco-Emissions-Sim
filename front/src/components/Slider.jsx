// Slider component to create factor sliders with different ranges.
function Slider({ sliderState, minRange, maxRange, step }) {
    
    // Sets slider value using its state.
    function updateSetFunction(event) {
        sliderState.setFunction(Number(event.target.value));
    }

    let value = sliderState.setValue;
    let percent = ((value - minRange) / (maxRange - minRange)) * 100;

    return (
        <div>
            <input
                type="range"
                min={minRange}
                max={maxRange}
                value={value}
                step={step}
                onChange={updateSetFunction}
                style={{ backgroundSize: `${percent}% 100%` }}
            />
        </div>
    );
}

export default Slider;
