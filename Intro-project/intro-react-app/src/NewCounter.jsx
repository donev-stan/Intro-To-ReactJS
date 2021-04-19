import React, { useState, useEffect} from 'react';

const NewCounter = () => {
    let [count, setCount] = useState(0);

    //--> The following will fire

    // on MOUNT, on UPDATE
    // useEffect(() => {
    //     console.log("We have run the useEffect! - on Mount and Update");
    // });

    // on MOUNT (componentDidMount)
    // useEffect(() => {
    //     console.log("We have run the useEffect! - on Mount");
    // }, []);

    // on MOUNT, on UNMOUNT
    useEffect(() => {
        console.log("The component has Mounted!");

        return () => {
            console.log("The component has Unmounted!");
        }
    }, []);


    return (
        <div>
            <h6>Counter</h6>
            <p>current count is: {count}</p>
            <button onClick={()=> setCount(++count)}>Increment Count</button>
        </div>
    )
}

export default NewCounter;
