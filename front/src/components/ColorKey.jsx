import React from "react";

const ColourKey = ({ keyItems }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
      }}
    >
      {keyItems.map((item) => (
        <div
          key={item.title}
          style={{
            backgroundColor: item.color,
            flex: 1,
            display: "flex",
            alignItems: "center", // vertical
            justifyContent: "center", // horiztontal
            color: "black",
            fontWeight: "bolder",
            fontSize: "1em",
            height: "5vh",
          }}
        >
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default ColourKey;