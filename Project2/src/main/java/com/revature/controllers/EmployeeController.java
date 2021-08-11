package com.revature.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Employee;
import com.revature.services.EmployeeService;

@CrossOrigin
@RestController
public class EmployeeController {

	@Autowired
	EmployeeService es;

	// CREATE
	@PostMapping(value = "/employees", consumes = "application/json", produces = "application/json")
	public Employee addEmployee(@RequestBody Employee e) {
		return es.addEmployee(e);
	}

	// READ
	@GetMapping("employees/{id}")
	public Employee getEmployee(@PathVariable("id") String id) {
		return es.getEmployee(Integer.parseInt(id));
	}

	@GetMapping("employees/{firstname}")
	public List<Employee> getEmployeeByFirstname(@PathVariable("firstname") String firstname) {
		return es.getEmployeeByFirstname(firstname);
	}

	@GetMapping("employees/{email}")
	public List<Employee> getEmployeeByEmail(@PathVariable("email") String email) {
		return es.getEmployeeByEmail(email);
	}

	@GetMapping(value = "/employees", produces = "application/json")
	public List<Employee> getAllEmployees() {
		return es.getAllEmployees();
	}

	@GetMapping(value = "/employees/managers", produces = "application/json")
	public List<Employee> getAllManagers() {
		return es.getAllManagers();
	}

	@GetMapping("employees/search")
	public List<Employee> searchEmployee(@RequestParam(required = false) String firstname,
			@RequestParam(required = false) String email) {

		if (firstname != null) {
			return es.getEmployeeByFirstname(firstname);
		} else if (email != null) {
			return es.getEmployeeByEmail(email);
		} else {
			return new ArrayList<Employee>();
		}
	}

	// UPDATE
	@PutMapping(value = "/employees/{id}", consumes = "application/json", produces = "application/json")
	public Employee updateActor(@PathVariable int id, @RequestBody Employee change) {
		change.setId(id);
		return es.updateEmployee(change);
	}

	// DELETE
	@DeleteMapping("/employees/{id}")
	public boolean deleteEmployee(@PathVariable int id) {
		return es.deleteEmployee(id);
	}

	// For sending password email
	@GetMapping("forgotpassword/{email}")
	public List<Employee> sendPasswordEmail(@PathVariable("email") String email) {
		es.sendPasswordEmail(email);

		return es.getEmployeeByEmail(email);
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("employees/credential")
	public Employee credentialEmployee(@RequestBody Employee e) {
		Employee rep = es.getEmployee(e.getEmail(), e.getPassword());
		if (rep != null) {
			return rep;
		} else {
			return new Employee();
		}
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("manager/{id}")
	public List<Employee> getEmployeebymanager(@PathVariable("id") String id) {
		return es.getEmployeebymanager(Integer.parseInt(id));
	}

}
