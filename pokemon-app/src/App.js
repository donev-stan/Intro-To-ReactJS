import React, { useState, useEffect } from "react";
import Characters from './Characters';

function App() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setCharacter(data.results.map(c => c.name));
        console.log(character);
      });
  }, [])

  return (
    <Characters key={character.name} character={character} />
  );
}

export default App;
