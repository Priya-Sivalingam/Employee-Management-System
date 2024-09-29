import React from 'react';
import backgroundImage from '../assets/How-to-make-employees-feel-a-sense-of-belonging-to-your-company-Centric-HR.jpg'; // Adjust the path as necessary
import image1 from '../assets/6172509.gif'; // Adjust the path as necessary
import image2 from '../assets/6172512.gif'; // Adjust the path as necessary
import image3 from '../assets/6172532.gif'; // Adjust the path as necessary
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 flex flex-col">
      
      {/* Hero Section with Parallax Effect */}
      <div className="relative overflow-hidden mt-16"> {/* Add margin-top to create space */}
        <div
          className="absolute inset-0 transform -translate-y-1/4 md:translate-y-0 bg-fixed"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'blur(8px)',
            zIndex: -1,
          }}
        ></div>

        <div className="relative flex flex-col md:flex-row items-center justify-center p-8 md:p-16">
          {/* Text Content with 3D Effect */}
          <div className="flex-1 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 transform hover:translate-y-2 transition duration-500">
              Welcome to the <span className="text-blue-600">Employee Management System</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 transform hover:scale-105 transition duration-500">
              Efficiently manage employee records and streamline your operations.
            </p>
            <button onClick={() => navigate("/login")} className="bg-blue-500 hover:bg-blue-700 hover:shadow-lg text-white font-bold py-3 px-6 rounded-full transform hover:scale-110 transition duration-300 shadow-md">
              Get Started
            </button>
          </div>

          {/* Large Responsive Image Box */}
          <div className="flex-shrink-0 w-full md:w-1/3 lg:w-2/5 xl:w-1/2 relative">
            <div className="group perspective">
              <img
                src={backgroundImage}
                alt="Employee Management"
                className="rounded-lg shadow-lg transform group-hover:rotate-y-12 group-hover:rotate-x-6 transition-transform duration-700 w-full h-auto"
                style={{ objectFit: 'cover', maxHeight: '400px' }} // Ensures the image covers a large area while being responsive
              />
            </div>
          </div>

        </div>
      </div>

      {/* Additional Visual Elements */}
      <div className="flex justify-center mt-12 space-x-8">
        {/* Animated Icons */}
        <div className="p-4 bg-white shadow-lg rounded-full transform hover:rotate-12 transition duration-300">
          <img
            src={image1}
            alt="Icon 1"
            className="w-12 h-12"
          />
        </div>
        <div className="p-4 bg-white shadow-lg rounded-full transform hover:rotate-12 transition duration-300">
          <img
            src={image2}
            alt="Icon 2"
            className="w-12 h-12"
          />
        </div>
        <div className="p-4 bg-white shadow-lg rounded-full transform hover:rotate-12 transition duration-300">
          <img
            src={image3}
            alt="Icon 3"
            className="w-12 h-12"
          />
        </div>
      </div>
      
    </div>
  );
};

export default Home;
