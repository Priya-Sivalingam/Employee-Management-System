import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // State for loading indicator
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages
    setLoading(true); // Set loading state

    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        username,
        password,
      });

      // Assuming the backend sends a success message or token
      if (response.status === 200) {
        setMessage("Login successful!");
        // Optionally, store the token or user information if needed
        localStorage.setItem("token", response.data.token); // Store token in local storage
        // Redirect to employee list
        navigate("/employeeList");
      }
    } catch (error) {
      // Improved error handling
      if (error.response && error.response.status === 401) {
        setMessage("Invalid credentials. Please try again.");
      } else {
        setMessage("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false); // Reset loading state after attempt
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            className="border rounded py-2 px-3 w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required // Add required attribute for form validation
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="border rounded py-2 px-3 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required // Add required attribute for form validation
          />
        </div>
        <button
          type="submit"
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading} // Disable button while loading
        >
          {loading ? "Logging in..." : "Login"} {/* Change button text based on loading state */}
        </button>
      </form>
      {message && <p className={`mt-4 ${message.includes("successful") ? "text-green-500" : "text-red-500"}`}>{message}</p>}
    </div>
  );
};

export default Login;
