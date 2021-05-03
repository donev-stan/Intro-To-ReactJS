import { useState, useEffect } from "react";

const UseEffectHook = () => {
    const [resourceType, setResourceType] = useState("posts");
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log('without a second param this is ran every time our app renders');
    });

    // This will run every time the params in the array change
    // onMount
    useEffect(() => {
        console.log(`Mount ${resourceType}`);

        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json));

        // Cleanup
        return () => {
            console.log(`Unmount ${resourceType}`);
        }
    }, [resourceType]);

    return (
        <div className="container">
            <div className="container shadow-lg p-3 mt-5 bg-dark text-white ">
                <h1>useEffect hook</h1>
            </div>

            <div className="container-fluid shadow-lg p-3 my-5 bg-white rounded">
                <div className="row">
                    <div className="col">
                        <button
                            onClick={() => setResourceType("posts")}
                            className="btn btn-primary"
                        >
                            Posts
                        </button>
                    </div>

                    <div className="col">
                        <button
                            onClick={() => setResourceType("comments")}
                            className="btn btn-primary"
                        >
                            Comments
                        </button>
                    </div>

                    <div className="col">
                        <button
                            onClick={() => setResourceType("users")}
                            className="btn btn-primary"
                        >
                            Users
                        </button>
                    </div>
                </div>

                <div className="row my-4">
                    <div className="col">
                        <h1>Page: {resourceType}</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        {items.map(item => {
                            return <pre>{JSON.stringify(item)}</pre>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UseEffectHook;
