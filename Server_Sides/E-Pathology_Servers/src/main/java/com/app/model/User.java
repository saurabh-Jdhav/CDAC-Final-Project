package com.app.model;


import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "userId")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long userId;
	
	
	private String firstName;
	
	private String lastName;
	@javax.validation.constraints.Email
	@NotBlank
	@Column(unique = true)
	private String email;
	
	private String password;
	
	private String role;
	
	  @OneToMany(fetch = FetchType.EAGER,mappedBy="user",cascade = CascadeType.MERGE)
	    private Set<TestBooking> testBooking;
	  
	  @OneToMany(fetch = FetchType.EAGER,mappedBy="user",cascade = CascadeType.MERGE)
	    private Set<Payment> payment;
	  
	
	  

	
	  
public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@JsonIgnore
	public Set<TestBooking> getTestBooking() {
		return testBooking;
	}

	public void setTestBooking(Set<TestBooking> testBooking) {
		this.testBooking = testBooking;
	}
	@JsonIgnore
	public Set<Payment> getPayment() {
		return payment;
	}

	public void setPayment(Set<Payment> payment) {
		this.payment = payment;
	}

public User()
{
	
}
	
	public User(long userId)
	{
		this.userId=userId;
	}
	
	

}
