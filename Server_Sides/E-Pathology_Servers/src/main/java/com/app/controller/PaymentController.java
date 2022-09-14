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
import com.app.model.Payment;
import com.app.repo.PaymentRepository;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/pt1/")
public class PaymentController {

	@Autowired
	private PaymentRepository paymentRepository;
	
	// get all employees
	@GetMapping("/payment")
	public List<Payment> getAllpayment(){
		return paymentRepository.findAll();
	}
	@PostMapping("/payment") 
	  public ResponseEntity<?> createPatient(@RequestBody Payment payment) 
	  {
		 paymentRepository.save(payment); 
		 return Response.success(payment); 
		 
	  }
	
	@PutMapping("/payment/{CardId}")
	public ResponseEntity<Payment> updateLab(@PathVariable Long CardId,@RequestBody Payment paymentdetails)
	{
		Payment pt1 = paymentRepository.findById(CardId)
				.orElseThrow(() -> new ReasourceNotFoundException("Payment not exist with id :" + CardId));

		//p1.setPatientId(patientdetails.getPatientId());
		//pt1.setCardId(paymentdetails.getCardId());
		pt1.setCardNo(paymentdetails.getCardNo());
		pt1.setValidTill(paymentdetails.getValidTill());
		pt1.setCvv(paymentdetails.getCvv());
		pt1.setNameOnCard(paymentdetails.getNameOnCard());
		
		
    Payment updatepay=paymentRepository.save(pt1);
    return ResponseEntity.ok(updatepay);
    
	}
	
	@DeleteMapping("/payment/{CardId}")
	public ResponseEntity<Map<String, Boolean>> deleteLab(@PathVariable Long CardId){
	      Payment pt1 = paymentRepository.findById(CardId)
				.orElseThrow(() -> new ReasourceNotFoundException("Payment not exist with id :" + CardId));
		
	    paymentRepository.delete(pt1);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
