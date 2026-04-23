import React from "react";

function SearchBox({ query, setQuery, search }) {
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="Search city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && search()}
      />
      <button className="search-btn" onClick={search}>
        🔍
      </button>
    </div>
  );
}

export default SearchBox;
