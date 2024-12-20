import React, { useState } from "react";
import axios from "axios";
import backgroundImage from "./assets/resback.jpg"; // Đảm bảo đường dẫn chính xác
import config from "./config"; 
const SearchPage = () => {
  const [keyword, setKeyword] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(""); 

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${config.API_URL}/search`, {
        params: { keyword, restaurant },
      });
      setResults(response.data);
      setError("");
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("No results found");
      } else {
        setError("Error fetching data");
      }
      setResults(null);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center p-6 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover", // Giữ hình nền bao phủ toàn bộ không gian
        backgroundPosition: "center", // Căn giữa hình nền
        backgroundAttachment: "fixed", // Giữ cố định ảnh khi cuộn
        backgroundRepeat: "no-repeat", // Ngừng lặp lại hình nền
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-semibold text-orange-400 mb-6">
          Restaurant Keyword Search
        </h1>

        <div className="flex space-x-4 mb-6">
          <input
            type="text"
            placeholder="Enter keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="p-3 w-72 border border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-white bg-black bg-opacity-50"
          />
          <input
            type="text"
            placeholder="Enter restaurant name (optional)"
            value={restaurant}
            onChange={(e) => setRestaurant(e.target.value)}
            className="p-3 w-72 border border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-white bg-black bg-opacity-50"
          />
        </div>

        <button
          onClick={handleSearch}
          className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          Search
        </button>

        {error && <p className="mt-6 text-red-500 font-semibold">{error}</p>}

        {results && (
          <div className="mt-8 space-y-6 w-full max-w-3xl">
            <h2 className="text-2xl font-semibold text-orange-400">
              Search Results:
            </h2>
            {Object.keys(results).map((restaurantName) => (
              <div
                key={restaurantName}
                className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg border border-orange-500"
              >
                <h3 className="text-xl font-bold text-orange-400">
                  {restaurantName}
                </h3>
                <ul className="space-y-4 mt-4">
                  {results[restaurantName].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-4 text-gray-300"
                    >
                      <span className="text-orange-400 font-semibold">
                        {item.Word}:
                      </span>
                      <span>{item.Rate}% positive rate</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
