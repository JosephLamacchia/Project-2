package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Task;
import com.revature.repositories.TaskRepo;

@Service
public class TaskServiceImpl implements TaskService {

	//Automatically maps an object
	//to its instance found in the Spring Container. IF ONE EXISTS.
	//If more than one instance exists, you will need an @Qualifier
	@Autowired
	TaskRepo er;
	
	// CREATE
	@Override
	public Task addTask(Task e) {
		return er.save(e);
	}

	// READ
	@Override
	public Task getTask(int id) {
		return er.findById(id).get();
	}

	@Override
	public List<Task> getTaskByFirstname(String firstname) {
		return er.findByFirstname(firstname);
	}
	
	@Override
	public List<Task> getAllTasks() {
		return (List<Task>) er.findAll();
	}

	// UPDATE
	@Override
	public Task updateTask(Task change) {
		return er.save(change);
	}

	// DELETE
	@Override
	public boolean deleteTask(int id) {
		try {
			er.deleteById(id);
			return true;
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			return false;
		}
	}



}