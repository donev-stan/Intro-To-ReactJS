import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/ducks/counter";

const Counter = ({name}) => {
    // const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        // setCount(count + 1);
        dispatch(increment());
        setVotes(votes + 1);
    };

    const handleDecrement = () => {
        // setCount(count - 1);
        dispatch(decrement());
        setVotes(votes - 1);
    };

    const [votes, setVotes] = useState(0);

    return (
        <div className="container my-4 border">
            <div className="row">
                <div className="col">
                    {/* <h3>{`Count: ${count}`}</h3> */}
                    <h5>{name}</h5>
                    <h6>{`Votes: ${votes}`}</h6>
                    <button className="btn btn-success m-2" onClick={handleIncrement}> Increment </button>
                    <button className="btn btn-danger m-2" onClick={handleDecrement}> Decrement </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;