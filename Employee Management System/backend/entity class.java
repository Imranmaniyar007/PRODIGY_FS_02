package com.example.demo.model;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.time.LocalDate;

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String firstName;

    @NotBlank
    private String lastName;

    @Email
    @NotBlank
    private String email;

    private String phone;
    private String position;
    private String department;
    private LocalDate dateOfBirth;
    private LocalDate dateOfHire;
    private Double salary;

    // Getters and setters
}
