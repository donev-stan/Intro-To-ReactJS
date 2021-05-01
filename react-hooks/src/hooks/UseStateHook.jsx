import { useState } from "react";

const UseStateHook = () => {

        const [count, setCount] = useState(0); 

    // For more complex defaults we could use function
        // const [count, setCount] = useState(() => {
        //     console.log("Function ran");
        //     // Ran only when the component is rendered
        //     return 0; // count
        // }); 

    // When dealing with object - when we update it we spread it first {...previousState, update}
        // const [state, setState] = useState({ count: 0, text: 'Votes'}); 
        // const count = state.count;
        // const text = state.text;
    // But its best to use separate hooks 


    const decrementCount = () => {
        // setCount(count - 1); // Not correct!

        // Correct way is to use function
        setCount((previousCount) => previousCount - 1);

        // setState((previousState) => {
        //     return {
        //         ...previousState,
        //         count: previousState.count - 1,
        //     }
        // });
    }

    const incrementCount = () => {
        setCount(previousCount => previousCount + 1);
    }

    return (
        <div className="container">
            <div className="container shadow-lg p-3 mt-5 bg-dark text-white ">
                <h1>useState hook</h1>
            </div>

            <div className="container shadow-lg p-3 mt-5 bg-white rounded">
                <div className="row">
                    {/* Buton */}
                    <div className="col">
                        <button onClick={decrementCount} type="button" className="btn btn-danger">
                            Decrement
                        </button>
                    </div>

                    {/* Indicator */}
                    <div className="col">
                        {/* <h3>Count: {count}</h3> */}
                        <h3>Count: {count}</h3>
                    </div>

                    {/* Button */}
                    <div className="col">
                        <button onClick={incrementCount} type="button" className="btn btn-warning">
                            Increment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UseStateHook;