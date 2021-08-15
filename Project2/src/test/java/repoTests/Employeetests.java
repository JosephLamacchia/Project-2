package repoTests;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import com.revature.beans.Employee;
import com.revature.beans.Task;
import com.revature.repositories.EmployeeRepo;


@SpringBootTest(classes = com.revature.demo.SpringDataApplication.class)
@Transactional
public class Employeetests {
	
	@Autowired
	EmployeeRepo er;
	
	@Test
	void getAllEmployeess() {
		List<Employee> employees = (List<Employee>) er.findAll();
		Assertions.assertFalse(employees.isEmpty());
	}

	@Test
	void  getEmployee() {
		Employee employee =er.findById(1).get();
		Assertions.assertEquals(1,employee.getId());
	}
	
	@Test
	@Rollback
	void AddEmployee() {
				
		
		 
		Employee employee=new Employee("test@gmail.com","test1","test1","test1",true,1);
		employee = er.save(employee);
			
		Assertions.assertNotEquals(0, employee.getId());
		
		
	}
	
	@Test
	@Rollback
	void updateEmployee() {
		
		 
		Employee employee=new Employee(1,"test@gmail.com","test1","test1","test1",true,1);
		employee = er.save(employee);
			
			
		Assertions.assertNotEquals(0, employee.getId());
		
		
	}
	
}
