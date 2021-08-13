package com.revature.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Task;
import com.revature.services.TaskService;

@RestController
@CrossOrigin
public class TaskController {
	
	@Autowired
	TaskService es;
	
	// CREATE
	@PostMapping(value = "/task", consumes = "application/json", produces = "application/json")
	public Task addTask(@RequestBody Task e) {
		return es.addTask(e);
	}

	// READ
	@GetMapping("task/{id}")
	public Task getTask(@PathVariable("id") String id) {
		return es.getTask(Integer.parseInt(id));
	}
	
	
	@GetMapping(value = "/task", produces = "application/json")
	public List<Task> getAllTasks() {
		return es.getAllTasks();
	}

	// UPDATE
	@PutMapping(value = "/task/{id}", consumes = "application/json", produces = "application/json")
	public Task updateTask(@PathVariable int id, @RequestBody Task change) {
		change.setId(id);
		return es.updateTask(change);
	}
	
	// DELETE
	@DeleteMapping("/task/{id}")
	public boolean deleteTask(@PathVariable int id) {
		return es.deleteTask(id);
	}
	

}
