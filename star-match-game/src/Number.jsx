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
            style={{ backgroundColor: colors[status] }}
            onClick={() => onClick(number, status)}>
            {number}
        </button>
    );
};

export default Number;
