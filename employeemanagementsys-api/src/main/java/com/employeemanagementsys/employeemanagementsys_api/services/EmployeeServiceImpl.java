package com.employeemanagementsys.employeemanagementsys_api.services;

import com.employeemanagementsys.employeemanagementsys_api.entity.EmployeeEntity;
import com.employeemanagementsys.employeemanagementsys_api.model.Employee;
import com.employeemanagementsys.employeemanagementsys_api.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();

        // Copy all properties from Employee model to EmployeeEntity
        BeanUtils.copyProperties(employee, employeeEntity);

        employeeRepository.save(employeeEntity);
        return employee;
    }

    @Override
    public List<Employee> getAllEmployees() {
        List<EmployeeEntity> employeeEntities = employeeRepository.findAll();

        // Map EmployeeEntity to Employee, including new fields
        List<Employee> employees = employeeEntities
                .stream()
                .map(emp -> new Employee(
                        emp.getId(),
                        emp.getFirstName(),
                        emp.getLastName(),
                        emp.getEmailId(),
                        emp.getPhoneNumber(),
                        emp.getAddress(),
                        emp.getHireDate(),
                        emp.getBirthDate(),
                        emp.getSalary(),
                        emp.getAge(),
                        emp.getExperience(),
                        emp.getRole(),
                        emp.getQualification()
                ))
                .collect(Collectors.toList());

        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        EmployeeEntity employee = employeeRepository.findById(id).orElseThrow(() -> new RuntimeException("Employee not found"));
        employeeRepository.delete(employee);
        return true;
    }

    @Override
    public Employee getEmployeeById(Long id) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id).orElseThrow(() -> new RuntimeException("Employee not found"));
        Employee employee = new Employee();

        // Copy all properties from EmployeeEntity to Employee model
        BeanUtils.copyProperties(employeeEntity, employee);
        return employee;
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id).orElseThrow(() -> new RuntimeException("Employee not found"));

        // Update the entity with new values from Employee model
        employeeEntity.setFirstName(employee.getFirstName());
        employeeEntity.setLastName(employee.getLastName());
        employeeEntity.setEmailId(employee.getEmailId());
        employeeEntity.setPhoneNumber(employee.getPhoneNumber());
        employeeEntity.setAddress(employee.getAddress());
        employeeEntity.setHireDate(employee.getHireDate());
        employeeEntity.setBirthDate(employee.getBirthDate());
        employeeEntity.setSalary(employee.getSalary());
        employeeEntity.setAge(employee.getAge());
        employeeEntity.setExperience(employee.getExperience());
        employeeEntity.setRole(employee.getRole());
        employeeEntity.setQualification(employee.getQualification());

        employeeRepository.save(employeeEntity);

        return employee;
    }
}
