import { useEffect, useRef, useState } from "react";

export default function UseRefHook() {
    const [name, setName] = useState("Slim Shady");

    const renderCount = useRef(1); // returns an object with single property current

    // useEffect(() => {
    //     renderCount(prevCount => prevCount + 1);
    // });
    // THIS WILL CAUSE INFINITE LOOP!!

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    const inputRef = useRef();

    function inputFocus() {
        inputRef.current.focus();
        
        inputRef.current.value = 'Enter your name here!';
        // This doesn't change the state!!!
        // Bad practice. Management should be using react state or props..
    }

    // Storing the previous value of name inside of a Ref
    const prevName = useRef('_blank');

    useEffect(() => {
        prevName.current = name;
    }, [name]);

    return (
        <div className="container">
            <div className="container shadow-lg p-3 mt-5 bg-dark text-white ">
                <h1>useRef hook</h1>
            </div>

            <div className="container shadow-lg p-3 mt-5 bg-white rounded">
                <div className="row p-2">
                    <div className="col-10">
                        <input
                            type="text"
                            className="form-control"
                            ref={inputRef}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="col-2">
                        <button className="btn btn-warning" onClick={inputFocus}>
                            Focus on input!
                        </button>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <p>
                            My name is: <strong> {name} </strong>
                        </p>
                        <p>
                            And it used to be: <strong> {prevName.current} </strong>
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h6>
                            Component rendered{" "}
                            <strong> {renderCount.current} </strong> times.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
