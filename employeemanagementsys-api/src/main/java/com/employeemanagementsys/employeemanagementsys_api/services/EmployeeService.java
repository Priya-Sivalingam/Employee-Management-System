package com.employeemanagementsys.employeemanagementsys_api.services;

import com.employeemanagementsys.employeemanagementsys_api.model.Employee;

import java.util.List;

public interface EmployeeService {
    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();
}
