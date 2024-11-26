import React from "react";

const SearchResults = ({ results }) => {
  if (!results) return null;

  return (
    <div className="search-results">
      {Object.keys(results).length === 0 ? (
        <p>No results found.</p>
      ) : (
        Object.keys(results).map((restaurant) => (
          <div key={restaurant}>
            <h3>{restaurant}</h3>
            <ul>
              {results[restaurant].map((item, index) => (
                <li key={index}>
                  <strong>Word:</strong> {item.Word} | <strong>Total:</strong>{" "}
                  {item.Total} | <strong>Positive Count:</strong>{" "}
                  {item["Positive count"]} | <strong>Rate:</strong> {item.Rate}%
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResults;
