package com.revature.services;

import java.util.ArrayList;
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

	@Override
	public List<Task> getAllTasksbyemployee(int id) {
		List<Task> tasks= (List<Task>) er.findAll();
		List<Task> employeetasks= new ArrayList<Task>();
		for(int i = 0; i < tasks.size(); i++) {
			if (tasks.get(i).getE_id()==id) {
				employeetasks.add(tasks.get(i));
			}
					
		}
		
				return employeetasks;
	}

}