import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNumber: "",
    address: "",
    hireDate: "",
    birthDate: "",
    salary: "",
    age: "",
    experience: "",
    role: "",
    qualification: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
        navigate("/employeeList"); // Navigate back to employees list
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
      phoneNumber: "",
      address: "",
      hireDate: "",
      birthDate: "",
      salary: "",
      age: "",
      experience: "",
      role: "",
      qualification: "",
    });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Employee</h1>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1">
            <label htmlFor="firstName" className="block text-gray-600 text-sm font-normal">First Name</label>
            <input
              type="text"
              name="firstName"
              value={employee.firstName}
              onChange={handleChange}
              className="h-10 w-full border mt-2 px-2 py-2"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="lastName" className="block text-gray-600 text-sm font-normal">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={employee.lastName}
              onChange={handleChange}
              className="h-10 w-full border mt-2 px-2 py-2"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="emailId" className="block text-gray-600 text-sm font-normal">Email</label>
            <input
              type="email"
              name="emailId"
              value={employee.emailId}
              onChange={handleChange}
              className="h-10 w-full border mt-2 px-2 py-2"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="phoneNumber" className="block text-gray-600 text-sm font-normal">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={employee.phoneNumber}
              onChange={handleChange}
              className="h-10 w-full border mt-2 px-2 py-2"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="address" className="block text-gray-600 text-sm font-normal">Address</label>
            <input
              type="text"
              name="address"
              value={employee.address}
              onChange={handleChange}
              className="h-10 w-full border mt-2 px-2 py-2"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="hireDate" className="block text-gray-600 text-sm font-normal">Hire Date</label>
            <input
              type="date"
              name="hireDate"
              value={employee.hireDate}
              onChange={handleChange}
              className="h-10 w-full border mt-2 px-2 py-2"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="birthDate" className="block text-gray-600 text-sm font-normal">Birth Date</label>
            <input
              type="date"
              name="birthDate"
              value={employee.birthDate}
              onChange={handleChange}
              className="h-10 w-full border mt-2 px-2 py-2"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="salary" className="block text-gray-600 text-sm font-normal">Salary</label>
            <input
              type="number"
              name="salary"
              value={employee.salary}
              onChange={handleChange}
              className="h-10 w-full border mt-2 px-2 py-2"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="age" className="block text-gray-600 text-sm font-normal">Age</label>
            <input
              type="number"
              name="age"
              value={employee.age}
              onChange={handleChange}
              className="h-10 w-full border mt-2 px-2 py-2"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="experience" className="block text-gray-600 text-sm font-normal">Experience (years)</label>
            <input
              type="number"
              name="experience"
              value={employee.experience}
              onChange={handleChange}
              className="h-10 w-full border mt-2 px-2 py-2"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="role" className="block text-gray-600 text-sm font-normal">Role</label>
            <input
              type="text"
              name="role"
              value={employee.role}
              onChange={handleChange}
              className="h-10 w-full border mt-2 px-2 py-2"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="qualification" className="block text-gray-600 text-sm font-normal">Qualification</label>
            <input
              type="text"
              name="qualification"
              value={employee.qualification}
              onChange={handleChange}
              className="h-10 w-full border mt-2 px-2 py-2"
            />
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={saveEmployee}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
          >
            Save
          </button>
          <button
            onClick={reset}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
