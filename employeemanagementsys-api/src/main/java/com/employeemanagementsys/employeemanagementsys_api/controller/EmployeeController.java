package com.employeemanagementsys.employeemanagementsys_api.controller;


import com.employeemanagementsys.employeemanagementsys_api.model.Employee;
import com.employeemanagementsys.employeemanagementsys_api.services.EmployeeService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeService.createEmployee(employee);
    }


}
