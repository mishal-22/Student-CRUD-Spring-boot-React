package com.example.StudentCURD.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.StudentCURD.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer>{

}
