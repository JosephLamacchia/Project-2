package controllerTests;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.revature.beans.Employee;
import com.revature.services.EmployeeService;





@AutoConfigureMockMvc
@SpringBootTest(classes = com.revature.demo.SpringDataApplication.class)
class EmployeeControllerTests {

	
	@MockBean
	EmployeeService es;
	
	@Autowired
	MockMvc mvc;

	List<Employee> list = new ArrayList<>();
	Employee e =  new Employee(0,"test","test","test","test", false,10);
	

	@Test
	void getEmployeeByEmail()  throws Exception {
		Mockito.when(es.getEmployeeByEmail("test")).thenReturn(list);
		
		mvc.perform(MockMvcRequestBuilders.get("/employees/email"))
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string(e.toString()));

	}

}
