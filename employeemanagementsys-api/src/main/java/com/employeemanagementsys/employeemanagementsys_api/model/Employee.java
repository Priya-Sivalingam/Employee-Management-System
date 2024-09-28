package com.employeemanagementsys.employeemanagementsys_api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {
    private long id;
    private String firstName;
    private String lastName;
    private String emailId;
    private String phoneNumber;
    private String address;
    private LocalDate hireDate;
    private LocalDate birthDate;
    private double salary;
    private int age;
    private int experience;  // Number of years of experience
    private String role;
    private String qualification;
}
