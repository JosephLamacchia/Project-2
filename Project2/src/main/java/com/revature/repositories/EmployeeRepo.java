package com.revature.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.beans.Employee;

@Repository
public interface EmployeeRepo extends CrudRepository<Employee, Integer> {
	
	List<Employee> findByFirstname(String firstname);
	
	List<Employee> findByEmail(String email);
	
	Employee findByEmailAndPassword(String email, String password);
	
	
	

}
