import React, { useState, useEffect } from "react";
import Characters from "./Characters";
import Pagination from "./Pagination";

function App() {
    const [character, setCharacter] = useState([]);
    const [currentPageURL, setCurrentPageURL] = useState(
        "https://rickandmortyapi.com/api/character"
    );
    const [nextPageURL, setNextPageURL] = useState();
    const [prevPageURL, setPrevPageURL] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        fetch(currentPageURL)
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setNextPageURL(data.info.next);
                setPrevPageURL(data.info.prev);
                setCharacter(data.results);
            });

        // Cleanup
        return () => {
            // Code to cancel the fetch request so the new one
        };
    }, [currentPageURL]);

    const gotoNextPage = () => setCurrentPageURL(nextPageURL);
    const gotoPrevPage = () => setCurrentPageURL(prevPageURL);

    if (loading) return "Loading Characters...";

    return (
        <>
            <Characters 
              key={character.name} 
              character={character} 
            />
            
            <Pagination 
              gotoNextPage={nextPageURL ? gotoNextPage : null}
              gotoPrevPage={prevPageURL ? gotoPrevPage : null}
            />
        </>
    );
}

export default App;
