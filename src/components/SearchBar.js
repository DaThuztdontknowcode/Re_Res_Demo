import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const [restaurant, setRestaurant] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(keyword, restaurant);
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="flex flex-col items-center space-y-4 bg-black p-6 rounded-lg shadow-lg"
>
  <input
    type="text"
    placeholder="Enter keyword"
    value={keyword}
    onChange={(e) => setKeyword(e.target.value)}
    className="p-3 w-full border border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-white bg-black"
    required
  />
  <input
    type="text"
    placeholder="Enter restaurant name (optional)"
    value={restaurant}
    onChange={(e) => setRestaurant(e.target.value)}
    className="p-3 w-full border border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-white bg-black"
  />
  <button
    type="submit"
    className="bg-orange-600 text-white font-bold px-5 py-2 rounded-md shadow hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-500 transition-all duration-200"
  >
    Search
  </button>
</form>

  );
};


export default SearchBar;
