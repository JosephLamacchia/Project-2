package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Employee;
import com.revature.repositories.EmployeeRepo;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	//Automatically maps an object
	//to its instance found in the Spring Container. IF ONE EXISTS.
	//If more than one instance exists, you will need an @Qualifier
	@Autowired
	EmployeeRepo er;
	
	// CREATE
	@Override
	public Employee addEmployee(Employee e) {
		return er.save(e);
	}

	// READ
	@Override
	public Employee getEmployee(int id) {
		return er.findById(id).get();
	}

	@Override
	public List<Employee> getEmployeeByFirstname(String firstname) {
		return er.findByFirstname(firstname);
	}
	
	@Override
	public List<Employee> getEmployeeByEmail(String email) {
		return er.findByEmail(email);
	}
	
	@Override
	public List<Employee> getAllEmployees() {
		return (List<Employee>) er.findAll();
	}

	// UPDATE
	@Override
	public Employee updateEmployee(Employee change) {
		return er.save(change);
	}

	// DELETE
	@Override
	public boolean deleteEmployee(int id) {
		try {
			er.deleteById(id);
			return true;
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			return false;
		}
	}

}
