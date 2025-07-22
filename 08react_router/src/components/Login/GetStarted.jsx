import React from "react";

const GetStarted = () => {
  const handleClick = () => {
    alert("Getting started...");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-8 rounded-lg shadow-md max-w-5xl mx-auto mt-10">
      {/* Text Section */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">Get Started with Us</h2>
        <p className="text-gray-700 mb-6">
          Start your journey today and experience seamless tools, productivity, and
          innovation at your fingertips.
        </p>
        <button
          onClick={handleClick}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Get Started
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://www.zieler.co.uk/wp-content/uploads/2020/05/Lets-Get-Started-2-1-1024x480.webp"
          alt="Get Started"
          className="rounded-lg shadow-md w-full max-w-sm"
        />
      </div>
    </div>
  );
};

export default GetStarted;
