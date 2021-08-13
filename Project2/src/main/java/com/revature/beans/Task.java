package com.revature.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "task")
public class Task {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", updatable = false)
	private int id;
	
	@Column(name = "taskdescription", nullable = false)
	private String taskdescription;
	
	@Column(name = "startdate", nullable = false)
	private long startdate;
	
	@Column(name = "duedate", nullable = false)
	private long duedate;
	
	@Column(name = "e_id", nullable = false)
	private int e_id;
	
	@Column(name = "status", nullable = false)
	private String status;
	


	public Task() {
		super();
	}

	public Task(int id, String taskdescription, long startdate, long duedate, int e_id, String status) {
		super();
		this.id = id;
		this.taskdescription = taskdescription;
		this.startdate = startdate;
		this.duedate = duedate;
		this.e_id = e_id;
		this.status = status;
	}

	public Task(String taskdescription, long startdate, long duedate,int e_id, String status) {
		super();
		this.taskdescription = taskdescription;
		this.startdate = startdate;
		this.duedate = duedate;
		this.e_id = e_id;
		this.status = status;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTaskdescription() {
		return taskdescription;
	}

	public void setTaskdescription(String taskdescription) {
		this.taskdescription = taskdescription;
	}

	public long getStartdate() {
		return startdate;
	}

	public void setStarttime(long startdate) {
		this.startdate = startdate;
	}

	public long getDuedate() {
		return duedate;
	}

	public void setDuedate(long duedate) {
		this.duedate = duedate;
	}
	
	public int getE_id() {
		return e_id;
	}

	public void setE_id(int e_id) {
		this.e_id = e_id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Task [id=" + id + ", taskdescription=" + taskdescription + ", startdate=" + startdate + ", duedate="
				+ duedate + ", e_id=" + e_id + ", status=" + status + "]";
	}

}
