package com.revature.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Employee;
import com.revature.repositories.EmployeeRepo;
import com.revature.util.SendEmail;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	// Automatically maps an object
	// to its instance found in the Spring Container. IF ONE EXISTS.
	// If more than one instance exists, you will need an @Qualifier
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

	@Override
	public List<Employee> getAllManagers() {
		List<Employee> employees = (List<Employee>) er.findAll();
		for (int i = 0; i < employees.size(); i++) {
			if (employees.get(i).isManager() == false) {
				employees.remove(i);
				// decrement since this element is removed
				i--;
			}
		}
		return employees;
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

	@Override
	public List<Employee> sendPasswordEmail(String email, String message, String type) {
		List<Employee> e = er.findByEmail(email);
		
		
		switch (type) {
		
		
		case "pass":
			

			if (e.size() > 0) 	{

				System.out.println("Inside proper area of switch statement");
				SendEmail.send(email, "Your password is :" + e.get(0).getPassword(),"Forgotten Password");
				return e;
				
			} else {
				return null;
			}

			//Maybe figure out how to add names to make more custom
		case "Assign":
			//Can grab manager by the employees manager id? And then populate name. 
			SendEmail.send(email, "Your manager has assigned you the following task : " + message,"New Task");
			return e;
			

		case "Complete":
			//Less clear
			SendEmail.send(email, "Your employee has submitted the following completion report : " + message,"Completed Task");
			return e;
		
		case "Update":
			SendEmail.send(email,"A task you are working on has been updated : " + message, "Task Updated");
			return e;

		}
		return e;
		}
		
	
	@Override
	public Employee getEmployee(String email, String password) {

		return er.findByEmailAndPassword(email, password);
	}

	@Override
	public List<Employee> getEmployeebymanager(int id) {
		List<Employee> employees = (List<Employee>) er.findAll();
		List<Employee> employeesbymanager =new ArrayList<Employee>();
		for(int i = 0; i < employees.size(); i++) {
			if((employees.get(i).getM_id()==id) && (employees.get(i).isManager() == false)) {
				employeesbymanager.add(employees.get(i));
			}
		}

		return employeesbymanager;
	}

}
