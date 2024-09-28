import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Employee from "../Pages/Employee";

const EmployeeList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id)
      .then((res) => {
        if (employees) {
          setEmployees((prevElements) => {
            return prevElements.filter((employee) => employee.id !== id);
          });
        }
      })
      .catch((error) => {
        console.log("Error deleting employee:", error);
      });
  };

  return (
    <div className="container mx-auto my-12 p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-700">Employee Directory</h2>
        <button
          onClick={() => navigate("/addEmployee")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          + Add Employee
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-50">
            <tr>
              <th className="text-left font-semibold text-gray-600 uppercase tracking-wider py-4 px-6">
                First Name
              </th>
              <th className="text-left font-semibold text-gray-600 uppercase tracking-wider py-4 px-6">
                Last Name
              </th>
              <th className="text-left font-semibold text-gray-600 uppercase tracking-wider py-4 px-6">
                Email ID
              </th>
              <th className="text-right font-semibold text-gray-600 uppercase tracking-wider py-4 px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan="4" className="text-center py-6">
                  <div className="text-blue-500 text-lg font-semibold">
                    Loading...
                  </div>
                </td>
              </tr>
            ) : employees.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-6">
                  <div className="text-gray-500 text-lg font-semibold">
                    No employees found.
                  </div>
                </td>
              </tr>
            ) : (
              employees.map((employee) => (
                <Employee
                  employee={employee}
                  deleteEmployee={deleteEmployee}
                  key={employee.id}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
