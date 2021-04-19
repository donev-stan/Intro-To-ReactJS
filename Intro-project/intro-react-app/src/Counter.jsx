import React, { useState } from 'react'
 
const Counter = () => {
   
    // UseState Hook
    const [count, setCount] = useState(0);
    // count is the variable 
    // setCount is a function 
    // .useState(0) - 0 is the default value

    const handleDecrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <p>The count is: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
    // We can return only 1 element!

    // In order to avoid styling we could use React.Fragment
    //- This way we can have multiple elements not competing for the top level
    return (
        <React.Fragment>
            <p>This is a counter component.</p>
            <p>This is a counter component.</p>
        </React.Fragment>
    )
}

export default Counter;