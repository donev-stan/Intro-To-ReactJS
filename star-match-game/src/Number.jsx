import React from "react";

const Number = ({number}) => {
    return (
        <button 
            className="number"
            onClick={()=> console.log(number)}>
            {number}
        </button>
    );
};

export default Number;