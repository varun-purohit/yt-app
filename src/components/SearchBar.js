import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  // const onInputChange = (event) => {
  //   setTerm(event.target.value)
  // };

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
    // this above line is to tell parent that what our search term is
  };
  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
