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
	@Column(name = "t_id", updatable = false)
	private int id;
	
	@Column(name = "taskdescription", nullable = false)
	private String taskdescription;
	
	@Column(name = "starttime", nullable = false)
	private long starttime;
	
	@Column(name = "duedate", nullable = false)
	private long duedate;
	
	@Column(name = "status", nullable = false)
	private String status;
	
	@Column(name = "comment", nullable = false)
	private String comment;
	
	@Column(name = "e_id", nullable = false)
	private int e_id;

	public Task() {
		super();
	}

	public Task(int id, String taskdescription, long starttime, long duedate, String status, String comment, int e_id) {
		super();
		this.id = id;
		this.taskdescription = taskdescription;
		this.starttime = starttime;
		this.duedate = duedate;
		this.status = status;
		this.comment = comment;
		this.e_id = e_id;
	}
		//ID-Less
	public Task(String taskdescription, long starttime, long duedate, String status, String comment, int e_id) {
		super();
		this.taskdescription = taskdescription;
		this.starttime = starttime;
		this.duedate = duedate;
		this.status = status;
		this.comment = comment;
		this.e_id = e_id;
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

	public long getStarttime() {
		return starttime;
	}

	public void setStarttime(long starttime) {
		this.starttime = starttime;
	}

	public long getDuedate() {
		return duedate;
	}

	public void setDuedate(long duedate) {
		this.duedate = duedate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public int getE_id() {
		return e_id;
	}

	public void setE_id(int e_id) {
		this.e_id = e_id;
	}

	@Override
	public String toString() {
		return "Task [id=" + id + ", taskdescription=" + taskdescription + ", starttime=" + starttime + ", duedate="
				+ duedate + ", status=" + status + ", comment=" + comment + ", e_id=" + e_id + "]";
	}

	

}
