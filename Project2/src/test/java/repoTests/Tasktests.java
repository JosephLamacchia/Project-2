package repoTests;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;
import com.revature.beans.Task;
import com.revature.repositories.TaskRepo;

import com.revature.beans.Employee;


@SpringBootTest(classes = com.revature.demo.SpringDataApplication.class)
@Transactional
public class Tasktests {

	
	@Autowired
	TaskRepo er;
	
	@Test
	void getAllTasks() {
		List<Task> tasks = (List<Task>) er.findAll();
		Assertions.assertFalse(tasks.isEmpty());
	}
	
	@Test
	void  getTask() {
		Task task=er.findById(1).get();
		Assertions.assertEquals(1,task.getId());
	}
	
	@Test
	@Rollback
	void AddTask() {
				
		Task task=new Task("create table",8152021,9152021,2,"assign");
		task = er.save(task);
			
		Assertions.assertNotEquals(0, task.getId());
		
		
	}
	

	
	@Test
	@Rollback
	void updateTask() {
		
		Task task=new Task(1,"create table",8152021,9152021,2,"assign");
		task = er.save(task);
			
		Assertions.assertNotEquals(0, task.getId());
		
		
	}
	
	/*
	 * @Test void employeeAssignTask() {
	 * 
	 * List<Task> tasks= (List<Task>) er.findAll(); List<Task> employeetasks= new
	 * ArrayList<Task>(); for(int i = 0; i < tasks.size(); i++) { if
	 * (tasks.get(i).getE_id()==2) { employeetasks.add(tasks.get(i)); }
	 * 
	 * }
	 * 
	 * Assertions.assertNotEquals(0,employeetasks.size());
	 * 
	 * }
	 */
	
	@Test
	void employeeNoAssignTask()
	{
		
		List<Task> tasks= (List<Task>) er.findAll();
		List<Task> employeetasks= new ArrayList<Task>();
		for(int i = 0; i < tasks.size(); i++) {
			if (tasks.get(i).getE_id()==100) {
				employeetasks.add(tasks.get(i));
			}
					
		}
		
		Assertions.assertEquals(0,employeetasks.size());
		
	}
	
	
	

	
}
