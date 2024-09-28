import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService"; // Adjust the path as necessary

const EmployeeProfile = () => {
  const { id } = useParams(); // Retrieve employee ID from URL
  const navigate = useNavigate(); // For navigation
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch employee data when component mounts
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(id);
        setEmployee(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching employee data");
        setLoading(false);
      }
    };

    fetchEmployeeData();
  }, [id]);

  if (loading) return <p>Loading employee details...</p>;
  if (error) return <p>{error}</p>;

  const handleDelete = async () => {
    try {
      await EmployeeService.deleteEmployee(id); // Assuming deleteEmployee is implemented in EmployeeService
      navigate("/employeeList"); // Redirect after deletion
    } catch (err) {
      setError("Error deleting employee profile");
    }
  };

  return (
    <div className="container mx-auto my-10">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">
            {employee.firstName} {employee.lastName}
          </h2>
          <button 
            onClick={() => navigate(`/editEmployee/${id}`)} // Navigate to the update page
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Edit Profile
          </button>
        </div>

        <div className="space-y-3">
          <p><strong>Position:</strong> {employee.role}</p>
          <p><strong>Email:</strong> {employee.emailId}</p>
          <p><strong>Phone:</strong> {employee.phoneNumber}</p>
          <p><strong>Salary:</strong> ${employee.salary}</p>
          <p><strong>Address:</strong> {employee.address}</p>
          <p><strong>Hire Date:</strong> {new Date(employee.hireDate).toLocaleDateString()}</p>
          <p><strong>Birth Date:</strong> {new Date(employee.birthDate).toLocaleDateString()}</p>
          <p><strong>Experience:</strong> {employee.experience} years</p>
        </div>

        <div className="mt-6 flex space-x-4">
          <button 
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Delete Profile
          </button>
          <button 
            onClick={() => navigate("/employeeList")}
            className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400 transition"
          >
            Back to List
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
