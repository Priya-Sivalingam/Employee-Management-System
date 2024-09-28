import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = () => {
      // Clear token or any user-related data from local storage
      localStorage.removeItem("token"); // Adjust if you're using a different key

      // Optionally, display a logout message or notification here

      // Redirect to login page after logout
      navigate("/login");
    };

    handleLogout();
  }, [navigate]);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold">Logging out...</h2>
      <p>Please wait while we log you out.</p>
    </div>
  );
};

export default Logout;
