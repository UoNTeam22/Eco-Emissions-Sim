function NewSlider({ sliderState, minRange, maxRange, step }) {
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
          class="slider"
          id="myRange"
          step={step}
          onChange={updateSetFunction}
        />
      </div>
    );
  }
  
  export default NewSlider;
  