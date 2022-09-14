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

import com.app.model.TestBooking;
import com.app.repo.BookingRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/b1/")
public class TestBookingController {

	@Autowired
	private BookingRepository bookingRepository;
	
	// get all employees
	@GetMapping("/book")
	public List<TestBooking> getAllBookings(){
		return bookingRepository.findAll();
	}
	
	
	@GetMapping("/listofbookedusers/{UserID}")
	public List<TestBooking> getBookedUser(@PathVariable long UserID){
		return bookingRepository.getBookedUser(UserID);
	}
	
	@PostMapping("/book")
	public ResponseEntity<?> createTest(@RequestBody TestBooking book)
	{
		 bookingRepository.save(book);
		 return Response.success(book); 
	}
	
	@PutMapping("/book/{BookingId}")
	public ResponseEntity<TestBooking> updateLab(@PathVariable Long BookingId,@RequestBody TestBooking bookingdetails)
	{
		TestBooking b1 = bookingRepository.findById(BookingId)
				.orElseThrow(() -> new ReasourceNotFoundException("Booking not exist with id :" + BookingId));

		b1.setBookingId(bookingdetails.getBookingId());

		b1.setBookingDate(bookingdetails.getBookingDate());
		
		
		TestBooking updateLab=bookingRepository.save(b1);
	    return ResponseEntity.ok(updateLab);
    
	}
	
	@DeleteMapping("/booking/{BookingId}")
	public ResponseEntity<Map<String, Boolean>> deleteLab(@PathVariable Long BookingId){
	      TestBooking t1 = bookingRepository.findById(BookingId)
				.orElseThrow(() -> new ReasourceNotFoundException("Booking not exist with id :" + BookingId));
		
	    bookingRepository.delete(t1);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}	
}
