package com.revature.services;

import java.util.List;

import com.revature.beans.Employee;

public interface EmployeeService {
	
	// CREATE
	public Employee addEmployee(Employee a);
	
	// READ
	public Employee getEmployee(int id);
	public List<Employee> getEmployeeByFirstname(String firstname);
	public List<Employee> getEmployeeByEmail(String email);
	public List<Employee> getAllEmployees();
	
	// UPDATE
	public Employee updateEmployee(Employee change);
	
	// DELETE
	public boolean deleteEmployee(int id);

	
	public List<Employee> sendPasswordEmail(String email);


}
