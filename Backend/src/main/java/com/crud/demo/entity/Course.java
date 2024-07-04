package com.crud.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "course")
public class Course {
     @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private Long id;
     
    @Column( name = "course_name" )
    private String courseName;
    
    @Column( name = "email" )
    private String email;

    @Column( name = "price" )
    private String price;

    @Column( name = "trainee_name" )
    private String traineeName;
}
