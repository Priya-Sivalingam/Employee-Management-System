import React from 'react';
import backgroundImage from '../assets/download.jpeg'; // Adjust the path as necessary

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center p-8 md:p-16">
        {/* Text Content */}
        <div className="flex-1 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to the Employee Management System
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-4">
            Efficiently manage employee records and streamline your operations.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
            Get Started
          </button>
        </div>

        {/* Image Box */}
        <div className="flex-shrink-0 w-full md:w-1/2 relative">
          <img
            src={backgroundImage}
            alt="Employee Management"
            className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>
      
    </div>
  );
};

export default Home;
