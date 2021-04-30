import { React, useState } from "react";

const Counter = () => {
    // const [count, setCount] = useState(0);

    const increment = () => {
        // setCount(count + 1);
    };

    const decrement = () => {
        // setCount(count - 1);
    };

    return (
        <div className="container my-4 border">
            <div className="row">
                <div className="col">
                    <h3>{`Count: ${count}`}</h3>
                    <button className="btn btn-success m-2" onClick={increment}> Increment </button>
                    <button className="btn btn-danger m-2" onClick={decrement}> Decrement </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;