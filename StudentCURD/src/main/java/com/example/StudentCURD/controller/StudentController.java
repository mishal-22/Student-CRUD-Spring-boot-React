package com.example.StudentCURD.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.StudentCURD.model.Student;
import com.example.StudentCURD.service.StudentService;

@RestController
@RequestMapping("student")
@CrossOrigin
public class StudentController {
	@Autowired
	StudentService studentService;
	
	@PostMapping("add")
	public String add(@RequestBody Student student){
		 studentService.saveStudent(student); 
		 return "Successfully added";
	}
	
	@GetMapping("get")
	public List<Student> getAllStudents() { 
		return studentService.getAllStudents();
	}
	
	@DeleteMapping("delete/{id}")
	public String delete(@PathVariable Integer id) {
		studentService.deleteStudent(id);
		return "Item deleted succussfully";
		
	}

}
