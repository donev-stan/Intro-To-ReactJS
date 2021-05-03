import { useState, useMemo, useEffect } from "react";

export default function UseMemoHook() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    // const doubledNumber = slowFunction(number);
    
    const doubledNumber = useMemo(() => {
        return slowFunction(number)
    }, [number]);
    // Some numbers are now memorized and when we click on change theme button 
    // slowFunction isn't being ran => changes much faster when no computation (running slowFunction) is needed

    // When number is changed this is being ran every time
    // Even though its the same object but in memory its different reference
    // (themeStyles === themeStyles2[when rerendered]) => false
    // const themeStyles = {
    //     backgroundColor: dark ? "black" : "white",
    //     color: dark ? "white" : "black",
    // };

    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black",
        }
    }, [dark]);

    // For demonstation purposes:
    useEffect(() => {
       console.log('Thene Changed!');
    }, [themeStyles])

    return (
        <div className="container">
            <div className="container shadow-lg p-3 mt-5 bg-dark text-white ">
                <h1>useMemo hook</h1>
            </div>

            <div className="container shadow-lg p-3 mt-5 bg-white rounded">
                <div className="row p-2">
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setNumber(Number(e.target.value))}
                    />
                </div>

                <div className="row pl-2 pr-2">
                    <button
                        className="btn btn-success"
                        style={{ width: "100%" }}
                        onClick={() => setDark((prevDark) => !prevDark)}
                    >
                        Change Theme and Double Number
                    </button>
                </div>

                <div style={themeStyles} className='rounded p-2 mt-2'>
                    <div className="col">
                        <h3>{doubledNumber}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

function slowFunction(number) {
    console.log("Called slow function");

    // To simulate slow computing function
    for (let index = 0; index < 100000000; index++) {}

    return number * 2;
}
