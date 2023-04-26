import React from "react";
import "../styles/ColorKey.css";

// ColourKey component used to create map keys.
function ColourKey({ keyItems }) {
    return (
        <div className="all-keys">
            {keyItems.map((item) => (
                <div
                    key={item.title}
                    className="individual-key"
                    style={{
                        backgroundColor: item.color,
                    }}
                >
                    <span>{item.title}</span>
                </div>
            ))}
        </div>
    );
};

export default ColourKey;