import React from "react";

const Header = ({ keywords, removeKeywords, clearAll }) => {
  return (
    <div className="header-container">
      {keywords.map((key, id) => {
        return (
          <>
            <button onClick={() => removeKeywords(key)} key={id}>
              {" "}
              {key}{" "}
            </button>

            <button onClick={clearAll}> Clear All Filters </button>
          </>
        );
      })}
    </div>
  );
};

export default Header;
