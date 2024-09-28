package com.employeemanagementsys.employeemanagementsys_api.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Data
@Table(name = "employees")
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
