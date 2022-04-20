import "./App.css";
import data from "./data.json";
import Jobs from "./components/Jobs";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [filterKeywords, setFilterkeywords] = useState([]);

  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data))
      setFilterkeywords([...filterKeywords, data]);
  };

  const deleteKeyword = (data) => {
    const newKeywords = filterKeywords.filter((key) => key != data);
    setFilterkeywords(newKeywords);
  };

  const clearAllKeywords = () => {
    setFilterkeywords([]);
  };

  return (
    <>
      <div className="header"></div>

      {filterKeywords.length > 0 && (
        <Header
          keywords={filterKeywords}
          removeKeywords={deleteKeyword}
          clearAll={clearAllKeywords}
        />
      )}

      <Jobs data={data} setKeywords={addFilterKeywords} keywords={filterKeywords} />
    </>
  );
}

export default App;
