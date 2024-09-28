import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-gray-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-lg font-bold">Employee Management System</h1>
          <div>
          <button
          onClick={() => navigate("/login")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
          Login
        </button>
            <button 
            onClick={() => navigate("/register")}
            className="ml-4 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
              Register
            </button>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
