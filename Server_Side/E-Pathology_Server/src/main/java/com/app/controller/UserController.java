package com.app.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

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

import com.app.dto.Credentials;
import com.app.dto.Response;
import com.app.exception.ReasourceNotFoundException;
import com.app.model.User;
import com.app.repo.UserRepository;
import com.app.service.UserService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/user/")
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private UserService userService;

	// get all users
	@GetMapping("/alluser")
	public List<User> getAllUser() {
		return userRepository.findAll();
	}

	// user signup
	@PostMapping("/signup")
	public ResponseEntity<?> addUser(@RequestBody User user) {
		System.out.println("In Controller" + user);
		try
		{
		int count = userService.saveuser(user);
		
		if (count != 0)
			return Response.success(count + " User Added");
		    return Response.error("User Addition Failed");
	}
		catch(Exception e)
		{
			 return Response.error("User Addition Failed");
		}
	}

	
	
	
	
//	@PostMapping("/signup")
//	public User addUser(@RequestBody User user)
//	{
//		return userRepository.save(user);
//	}

	// user signin
	@PostMapping("/signin")
	public ResponseEntity<?> signIn(@Valid @RequestBody Credentials cred) {
		User user = userService.FindByEmailAndPassword(cred);
		if (user == null)
			return Response.error("User Not Found");
		return Response.success(user);
	
	}
	
	// admin signin
		@PostMapping("/adminuser")
		public String adminSignIn(@RequestBody User user) {
			User admin = (User)user;
			if(user.getEmail().equals("admin")&& user.getPassword().equals("admin")) {
				return "success";
			}
			return "failed";
		
		}
	

	@DeleteMapping("/user/{UserId}")
	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long UserId) {
		User user1 = userRepository.findById(UserId)
				.orElseThrow(() -> new ReasourceNotFoundException("User not exist with id :" + UserId));

		userRepository.delete(user1);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	@PutMapping("/{UserId}")
	public ResponseEntity<User> updateLab(@PathVariable Long UserId, @RequestBody User userdetails) {
		User u1 = userRepository.findById(UserId)
				.orElseThrow(() -> new ReasourceNotFoundException("User not exist with id :" + UserId));
		// u1.setUserid(userdetails.getUserid());
		u1.setFirstName(userdetails.getFirstName());
		u1.setLastName(userdetails.getLastName());
		u1.setEmail(userdetails.getEmail());
		u1.setPassword(userdetails.getPassword());
		u1.setRole(userdetails.getRole());

		User updateUser = userRepository.save(u1);
		return ResponseEntity.ok(updateUser);

	}

}
