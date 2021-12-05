import React, { useState } from "react";

const Search = (props) => {
  const [keyword, setKeyword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    //props.findBooks(keyword);
  };
  
  const search = () => {} 
  
  
  
  return (
    <div>
      <form id="searchAPI" onSubmit={(e) => handleSubmit(e)}>
        <label>
          Search for media on my single page app:
          <input
            type="text"
            id="term"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </label>

        <button> Search </button>

        <p style={{ color: "pink" }}>
          <em>{keyword && "Keywords Typed: " + keyword}</em>
        </p>
      </form>
    </div>

  );
};

export default Search;
