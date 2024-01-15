package com.example.StudentCURD.service;

import java.util.List;



import com.example.StudentCURD.model.Student;

public interface StudentService {

	public Student saveStudent(Student student);

	public List<Student> getAllStudents();

	public void deleteStudent(Integer id);

}
