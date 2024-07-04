package com.crud.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.crud.demo.entity.Course;
import com.crud.demo.repository.CourseRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CourseService {
    private final CourseRepository courseRepository;

    public Course save(Course course) {
        return courseRepository.save(course);
    }

    public List<Course> findAll() {
        return courseRepository.findAll();
    }

    public Course findById(@PathVariable Long id) {
        return courseRepository.findById(id).orElse(null);
    }

    public Course updateCourse(Long id, Course course) {
        Course courseDB = courseRepository.findById(id).orElse(null);
        if (courseDB == null) {
            return null;
        }
        courseDB.setCourseName(course.getCourseName());
        courseDB.setEmail(course.getEmail());
        courseDB.setPrice(course.getPrice());
        courseDB.setTraineeName(course.getTraineeName());
        return courseRepository.save(courseDB);
    }

    public void deleteCourse(Long id) {
        courseRepository.deleteById(id);
    }

}
