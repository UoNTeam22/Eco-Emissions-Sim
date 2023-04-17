import { useEffect, useState } from "react";

function ApplyButton(props) {
    const [text, setText] = useState("Apply"); // Text to display

    return (
        <div className="button apply" onClick={props.onClick}>
            <h1>
                {text}
            </h1>
        </div>
    );
}

export default ApplyButton;