import React, { useState, useEffect } from 'react';

const NewCounter = () => {
    let [count, setCount] = useState(0);

    //--> The following will fire 

    // on MOUNT, on UPDATE (componentDidMount, componentDidUpdate)
    // useEffect(() => {
    //     console.log("We have run the useEffect! - on Mount and Update");
    // }); //----------------

    // on MOUNT (componentDidMount)
    // useEffect(() => {
    //     console.log("We have run the useEffect! - on Mount");
    // }, []); //----------------

    // on MOUNT, on UNMOUNT (componentDidMount, componentWillUnmount)
    // useEffect(() => {
    //     console.log("The component has Mounted!");
    //     return () => {
    //         console.log("The component has Unmounted!");
    //     }
    // }, []); //----------------

    // componentDidMount & componentDidUpdate (useEffect will fire only to a change of the variables passed in the array)
    // useEffect(() => {
    //     console.log("UseEffect Ran!");
    // }, [count]); //----------------

    // componentWillUnmount & componentDidMount
    // useEffect(() => {
    //     console.log("The useEffect ran!");
    //     return () => {
    //         console.log("The return is being ran!");
    //     }
    // }, []);

    // componentDidMount & componentDidUpdate (return ran on update of count)
    useEffect(() => {
        console.log(`The component has updated to ${count}`);
        return () => { // cleanup func
            // when count var is changed this will fire and then the above will follow
            console.log(`We are in the cleanup - the count is: ${count}`);
        }
    }, [count]);

    return (
        <div>
            <h6>Counter</h6>
            <p>current count is: {count}</p>
            <button onClick={()=> setCount(++count)}>Increment Count</button>
        </div>
    )
}

export default NewCounter;
