package com.revature.services;

import java.util.List;

import com.revature.beans.Task;

public interface TaskService {
	
	// CREATE
	public Task addTask(Task a);
	
	// READ
	public Task getTask(int id);
	public List<Task> getTaskByFirstname(String firstname);
	public List<Task> getAllTasks();
	
	// UPDATE
	public Task updateTask(Task change);
	
	// DELETE
	public boolean deleteTask(int id);


}
