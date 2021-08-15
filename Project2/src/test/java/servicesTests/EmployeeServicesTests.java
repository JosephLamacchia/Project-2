package servicesTests;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.revature.beans.Employee;
import com.revature.repositories.EmployeeRepo;
import com.revature.services.EmployeeService;

@SpringBootTest(classes = com.revature.demo.SpringDataApplication.class)
class EmployeeServicesTests {

	@Autowired
	EmployeeService es;

	@MockBean
	EmployeeRepo er;

	@Test
	public void canAddEmployee() {

		Employee e = new Employee(0, "test", "test", "test", "test", false, 10);

		Mockito.when(er.save(e)).thenReturn(new Employee(0, "test", "test", "test", "test", false, 10));

		e = es.addEmployee(e);
		assertEquals("test", e.getFirstname());
		assertEquals("test", e.getLastname());

	}

	@Test
	public void canGetEmployeeByEmail() {

		List<Employee> list = new ArrayList<>();
		Employee e = new Employee(0, "test", "test", "test", "test", false, 10);
		list.add(e);

		Mockito.when(er.findByEmail("test")).thenReturn(list);

		list = es.getEmployeeByEmail("test");
		assertEquals("test", list.get(0).getFirstname());
		assertEquals("test", list.get(0).getLastname());

	}

	@Test
	public void canGetAllEmployees() {

		List<Employee> list = new ArrayList<>();
		Employee e = new Employee(0, "test", "test", "test", "test", false, 10);
		Employee e2 = new Employee(0, "test2", "test2", "test2", "test2", false, 10);

		list.add(e);
		list.add(e2);

		Mockito.when(es.getAllEmployees()).thenReturn(list);

		list = es.getAllEmployees();
		assertEquals("test", list.get(0).getFirstname());
		assertEquals("test", list.get(0).getLastname());

		assertEquals("test2", list.get(1).getFirstname());
		assertEquals("test2", list.get(1).getLastname());

	}

	@Test
	public void canDeleteEmployee() {
		Employee e = new Employee(0, "test", "test", "test", "test", false, 10);

		Mockito.doNothing().when(er).deleteById(e.getId());

		boolean ret = es.deleteEmployee(e.getId());

		assertTrue(ret);

	}

	@Test
	public void canUpdateEmployee() {

	}

}
