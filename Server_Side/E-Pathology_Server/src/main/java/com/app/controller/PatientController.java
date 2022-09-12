package com.app.controller;

import java.util.HashMap;


import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.Response;

import com.app.exception.ReasourceNotFoundException;
import com.app.model.Patient;
import com.app.repo.PatientRepository;



@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/p1/")
public class PatientController {

	@Autowired
	private PatientRepository patientRepository;
	
	
	/*
	 * public Patient requestTest(@RequestBody TestRequest request) { return
	 * patientRepository.save(request.getpatient());
	 * 
	 * }
	 */
	
	// get all employees
	@GetMapping("/patient")
	public List<Patient> getAllLabs(){
		return patientRepository.findAll();
	}

	@PostMapping("/patient") 
	  public ResponseEntity<?> createPatient(@RequestBody Patient patient) 
	  {
		 patientRepository.save(patient); 
		 return Response.success(patient); 
		 
	  }
	@GetMapping("/patient/{PatientId}" )
	public Object getAllpatient(@PathVariable Long PatientId){
		return patientRepository.findById(PatientId);
	}
	

	
	@PutMapping("/patient/{PatientId}")
	public ResponseEntity<Patient> updateLab(@PathVariable Long PatientId,@RequestBody Patient patientdetails)
	{
		Patient p1 = patientRepository.findById(PatientId)
				.orElseThrow(() -> new ReasourceNotFoundException("Lab not exist with id :" + PatientId));

		p1.setPatientId(patientdetails.getPatientId());
		p1.setFirstName(patientdetails.getFirstName());
		p1.setLastName(patientdetails.getLastName());
		p1.setMobileNo(patientdetails.getMobileNo());
		p1.setEmail(patientdetails.getEmail());
		p1.setAddress(patientdetails.getAddress());
		p1.setCity(patientdetails.getCity());
		p1.setState(patientdetails.getState());
		p1.setAdhaarNo(patientdetails.getAdhaarNo());
		
		
    Patient updateLab=patientRepository.save(p1);
    return ResponseEntity.ok(updateLab);
    
	}
	
	@DeleteMapping("/patient/{PatientId}")
	public ResponseEntity<Map<String, Boolean>> deleteLab(@PathVariable Long PatientId){
	      Patient p1 = patientRepository.findById(PatientId)
				.orElseThrow(() -> new ReasourceNotFoundException("Patient not exist with id :" + PatientId));
		
	    patientRepository.delete(p1);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
