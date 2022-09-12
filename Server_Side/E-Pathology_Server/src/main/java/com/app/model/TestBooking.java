package com.app.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class TestBooking {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long BookingId;
	
	@Temporal(TemporalType.DATE)
	private Date BookingDate;
	
	
	
	@ManyToOne(cascade= CascadeType.MERGE)
    @JoinColumn(name = "userId")
    private User user;
	
	@ManyToOne(cascade= CascadeType.MERGE)
    @JoinColumn(name = "patientId")
    private Patient patient;
	
	@ManyToOne(cascade= CascadeType.MERGE)
    @JoinColumn(name = "testID")
    private Test test;
	
	
	
	
    
//	@JsonIgnore
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
//	@JsonIgnore
	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}
//	@JsonIgnore
	public Test getTest() {
		return test;
	}

	public void setTest(Test test) {
		this.test = test;
	}

	public long getBookingId() {
		return BookingId;
	}

	public void setBookingId(long bookingId) {
		BookingId = bookingId;
	}

	public Date getBookingDate() {
		return BookingDate;
	}

	public void setBookingDate(Date bookingDate) {
		BookingDate = bookingDate;
	}
	
public TestBooking()
{
	
}

    
	
	
	
	
	
	
	

}
