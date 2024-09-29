import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Google as GoogleIcon } from "@mui/icons-material"; // Import Google icon from Material UI
import { CircularProgress } from "@mui/material"; // Loading spinner

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        username,
        password,
      });

      if (response.status === 200) {
        setMessage("Login successful!");
        localStorage.setItem("token", response.data.token);
        navigate("/employeeList");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setMessage("Invalid credentials. Please try again.");
      } else {
        setMessage("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // Simulate Google login (this should be handled by your backend or third-party auth library)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMessage("Google login successful!");
      navigate("/employeeList");
    }, 2000); // Simulate a delay for Google login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Username</label>
            <input
              type="text"
              className="border rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              className="border rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
          </button>
        </form>

        <div className="text-center text-gray-500 my-4">or</div>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg flex items-center justify-center transition duration-300"
          disabled={loading}
        >
          <GoogleIcon className="mr-2" />
          {loading ? <CircularProgress size={24} color="inherit" /> : "Sign in with Google"}
        </button>

        {message && (
          <p className={`mt-4 text-center ${message.includes("successful") ? "text-green-500" : "text-red-500"}`}>
            {message}
          </p>
        )}

        <div className="text-center mt-4">
          <p className="text-gray-600">Don't have an account?</p>
          <button
            onClick={() => navigate("/register")}
            className="text-blue-500 hover:underline"
          >
            Register here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
