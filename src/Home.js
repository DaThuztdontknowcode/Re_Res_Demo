import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "./assets/homeback.jpg"; // Đảm bảo thay thế đường dẫn ảnh đúng

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="border-4 border-gray-700 rounded-3xl p-16 w-3/4 sm:w-1/2 md:w-1/3 flex flex-col justify-center items-center"
        style={{
          backgroundColor: "rgba(169, 169, 169, 0.8)", // Thay đổi độ trong suốt của màu xám
          marginLeft: "30%", // Dịch chuyển khung sang phải 10%
        }}
      >
        <h1 className="text-5xl text-orange-500 font-bold mb-8 text-center">
          Welcome
        </h1>
        <button
          onClick={() => navigate("/search")}
          className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-500"
        >
          Go to Search
        </button>
      </div>
    </div>
  );
};

export default Home;
