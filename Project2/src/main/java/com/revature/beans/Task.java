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
	
	@Column(name = "firstname", nullable = false)
	private String firstname;
	
	@Column(name = "lastname", nullable = false)
	private String lastname;
	
	@Column(name = "activity", nullable = false)
	private String activity;
	
	@Column(name = "duration", nullable = false)
	private int duration;

	public Task() {
		super();
	}

	public Task(int id, String firstname, String lastname, String activity, int duration) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.activity = activity;
		this.duration = duration;
	}
		//ID-Less
	public Task(String firstname, String lastname, String activity, int duration) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.activity = activity;
		this.duration = duration;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getActivity() {
		return activity;
	}

	public void setActivity(String activity) {
		this.activity = activity;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	@Override
	public String toString() {
		return "Task [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", activity=" + activity
				+ ", duration=" + duration + "]";
	}

	

}
