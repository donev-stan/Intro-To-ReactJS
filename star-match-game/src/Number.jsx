import React from "react";

// Color Theme
const colors = {
    available: "lightgray",
    used: "lightgreen",
    wrong: "lightcoral",
    candidate: "deepskyblue",
};

const Number = ({ number, status, onClick }) => {
    return (
        <button
            className="number"
            onClick={() => onClick(number, status)}
            style={{ backgroundColor: colors[status] }}>
            {number}
        </button>
    );
};

export default Number;
