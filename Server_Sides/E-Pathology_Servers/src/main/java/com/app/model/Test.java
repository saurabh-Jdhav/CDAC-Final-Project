package com.app.model;



import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;


@Entity
public class Test {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long TestId;
	
	private String TestName;
	
	private long TestCharges;
	
	 @OneToMany(fetch = FetchType.EAGER,mappedBy="test",cascade = CascadeType.MERGE)
	    private Set<Test> test;
	 
	
	 public Test()
	 {
		 
	 }
	 public Test(long TestId)
	 {
		 this.TestId=TestId;
	 }

	public long getTestId() {
		return TestId;
	}


	public void setTestId(long testId) {
		TestId = testId;
	}


	public String getTestName() {
		return TestName;
	}


	public void setTestName(String testName) {
		TestName = testName;
	}


	public long getTestCharges() {
		return TestCharges;
	}


	public void setTestCharges(long testCharges) {
		TestCharges = testCharges;
	}	 
	 
	  

		
	
	
}
