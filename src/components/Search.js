// Search.js will return a form with the following identifier id="searchAPI" 
//e.g., <form id="searchAPI">. The form should have at least one text field for keyword input 
//e.g. <input id="term"/> and a button to submit the form.
// The search should be available on the home page of your app. 
//Your search <form/> will need to have an onSubmit() handler that will call your search() function.
// The search() function will return results of the iTunes Search API
// Your app should display the results of the search in an component called <ProductList/> with the identifier id="results" e.g. <div id="results"/>.



import React, { useState } from "react";
//this needs doing 
const Search = (props) => {
  const [keyword, setKeyword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    props.findItem(keyword);
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
