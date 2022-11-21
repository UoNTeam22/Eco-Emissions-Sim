import React from 'react';

class ApplyButton extends React.Component {
    state = {
        onClick: this.props.onClick || (() => { }),
        text: this.props.text || 'Apply',
    }

    render() {
        return (
            <div className="button apply" onClick={
                this.state.onClick
            }>
                <h1>
                    {this.state.text}
                </h1>
            </div>
        );
    }
}

export default ApplyButton;