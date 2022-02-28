import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ setLocationHandler }) {
  const [query, setQuery] = useState("");

  // wat zorgt er (e) hier voor? 6.5 callback props
  function OnFormSubmit(e) {
    e.preventDefault();
    setLocationHandler(query);
    console.log("Submitted!");
  }

  return (
    <form className="searchbar">
      <input
        type="text"
        name="search"
        value={query}
        // waar halt hij e.target.value ?
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Zoek een stad in Nederland"
      />
      <button type="submit">Zoek</button>
    </form>
  );
}

export default SearchBar;
