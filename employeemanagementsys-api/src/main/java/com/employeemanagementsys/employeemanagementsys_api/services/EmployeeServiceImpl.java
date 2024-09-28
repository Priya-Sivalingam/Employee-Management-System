package com.employeemanagementsys.employeemanagementsys_api.services;


import com.employeemanagementsys.employeemanagementsys_api.entity.EmployeeEntity;
import com.employeemanagementsys.employeemanagementsys_api.model.Employee;
import com.employeemanagementsys.employeemanagementsys_api.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl extends EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();

        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRepository.save(employeeEntity);
        return employee;
    }

}
