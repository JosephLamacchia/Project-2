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

import com.revature.beans.Task;
import com.revature.repositories.TaskRepo;
import com.revature.services.TaskService;

@SpringBootTest(classes = com.revature.demo.SpringDataApplication.class)
class TaskServicesTests {

	@Autowired
	TaskService ts;

	@MockBean
	TaskRepo tr;

	@Test
	public void canAddTask() {

		Task t = new Task(0, "test", 0, 0, 0, "test");

		Mockito.when(tr.save(t)).thenReturn(new Task(0, "test", 0, 0, 0, "test"));

		t = ts.addTask(t);
		assertEquals("test", t.getStatus());

	}

	@Test
	public void canGetAllTasks() {

		List<Task> list = new ArrayList<>();
		Task t = new Task(0, "test", 0, 0, 0, "test");
		Task t2 = new Task(0, "test2", 0, 0, 0, "test2");

		list.add(t);
		list.add(t2);

		Mockito.when(ts.getAllTasks()).thenReturn(list);

		list = ts.getAllTasks();
		assertEquals("test", list.get(0).getStatus());

		assertEquals("test2", list.get(1).getStatus());

	}

	@Test
	public void canDeleteTask() {
		Task t = new Task(0, "test", 0, 0, 0, "test");

		Mockito.doNothing().when(tr).deleteById(t.getId());

		boolean ret = ts.deleteTask(t.getId());

		assertTrue(ret);

	}

	@Test
	public void canUpdateTask() {
		Task t = new Task(0, "test", 0, 0, 0, "test");
		Task t2 = new Task(0, "test2", 0, 0, 0, "test2");

		Mockito.when(ts.updateTask(t)).thenReturn(t2);

		assertEquals("test", t.getStatus());
	}

}