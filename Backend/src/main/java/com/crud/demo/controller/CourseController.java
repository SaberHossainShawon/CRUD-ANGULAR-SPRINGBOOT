package com.crud.demo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.demo.entity.Course;
import com.crud.demo.service.CourseService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
@RequestMapping("/course")
public class CourseController {
    private final CourseService courseService;

    @PostMapping("/save")
    public Course save(@RequestBody Course course) {
        return courseService.save(course);
    }

    @GetMapping("/findAll")
    public List<Course> findAll() {
        return courseService.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/findById/{id}")
    public ResponseEntity<Course> findById(@PathVariable Long id) {
        System.out.println("Received ID: " + id);
        Course course = courseService.findById(id);
        if (course == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(course);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/updateCourse/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable Long id, @RequestBody Course course) {
        Course courseDB = courseService.updateCourse(id, course);
        if (courseDB == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(courseDB);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/deleteCourse/{id}")
    public void deleteCourse(@PathVariable Long id) {
        courseService.deleteCourse(id);
    }
}
