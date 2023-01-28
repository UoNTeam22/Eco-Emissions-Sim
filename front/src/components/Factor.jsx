import React from 'react';

// Slider website:
// https://reactjsexample.com/range-slider-library-written-in-typescript-and-using-web-component-technologies/

class Factor extends React.Component {
    state = {
        onClick: this.props.onClick || (() => { }),
        text: this.props.text || 'Factor x',
    }

    render() {
        return (
            <div className="button factor" onClick={
                this.state.onClick
            }>
                <h1>
                    {this.state.text}
                </h1>
            </div>
        );
    }
}

export default Factor;