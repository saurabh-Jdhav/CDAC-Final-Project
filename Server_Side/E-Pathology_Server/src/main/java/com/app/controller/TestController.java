package com.app.controller;

import java.util.HashMap;

import java.util.List;
import java.util.Map;
import java.util.Optional;

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
import com.app.model.Test;
import com.app.repo.TestRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/t1/")
public class TestController {

	@Autowired
	private TestRepository testRepository;
	
	// get all employees
	@GetMapping("/test")
	public List<Test> getAllLabs(){
		return testRepository.findAll();
	}
	
	@GetMapping("/testbyid/{TestId}")
	public Optional<Test> gettestbyid(@PathVariable Long TestId){
		return testRepository.findById(TestId);
	}
	
	@PostMapping("/test")
	public ResponseEntity<?> createTest(@RequestBody Test test)
	{
	    testRepository.save(test);
		return Response.success(test);
	}
	
	@PutMapping("/test/{TestId}")
	public ResponseEntity<Test> updateLab(@PathVariable Long TestId,@RequestBody Test testdetails)
	{
		Test t1 = testRepository.findById(TestId)
				.orElseThrow(() -> new ReasourceNotFoundException("Test not exist with id :" + TestId));

		//t1.setTestId(testdetails.getTestId());
		t1.setTestName(testdetails.getTestName());
		t1.setTestCharges(testdetails.getTestCharges());
		
		
    Test updateLab=testRepository.save(t1);
    return ResponseEntity.ok(updateLab);
    
	}
	
	@DeleteMapping("/test/{TestId}")
	public ResponseEntity<Map<String, Boolean>> deleteLab(@PathVariable Long TestId){
	      Test t1 = testRepository.findById(TestId)
				.orElseThrow(() -> new ReasourceNotFoundException("Test not exist with id :" + TestId));
		
	    testRepository.delete(t1);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}	

}
