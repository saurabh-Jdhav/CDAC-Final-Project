package com.app.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.mail.MessagingException;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
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
import com.app.service.EmailSenderService;
import com.app.service.OtpGenerator;
import com.app.service.UserService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/user/")
public class UserController {


	@Autowired
	private Environment env;
	
	@Autowired
	EmailSenderService service;
	
	@Autowired
	private OtpGenerator otpGenerator;

	
	@Autowired
	PasswordEncoder passwordEncoder;
	
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

		triggerMail(user.getEmail(), user.getFirstName());
		if (count != 0)
			return Response.success(count + " User Added");
		    return Response.error("User Addition Failed");
	}
		catch(Exception e)
		{
			 return Response.error("User Addition Failed");
		}
	}

	// User SignIn
	@PostMapping("/signin")
	public ResponseEntity<?> signIn(@Valid @RequestBody Credentials cred) {
		User user = userService.FindByEmailAndPassword(cred);
		if (user == null)
			return Response.error("User Not Found");
		return Response.success(user);
	
	}
	
	// Admin SingIn
		@PostMapping("/adminuser")
		public String adminSignIn(@RequestBody User user) {
			User admin = (User)user;
			String email = env.getProperty("admin.email");
			String password = env.getProperty("admin.password");
			if(user.getEmail().equals(email)&& user.getPassword().equals(password)) {
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
	
	public void triggerMail(String email ,String name) throws MessagingException {

		service.sendEmailWithAttachment(email,
				"Welcome " + name +" in E-Pathology Services we are here to Serv you...",
				"from Epathology",
				"E:\\image01.png"
				);

	}
	
	// UpdatePassword
	@PostMapping("/updatePassword/")
	public ResponseEntity<User> getUser(@RequestBody User userdetails) {
		User user =userRepository.getUserWithEmail(userdetails.getEmail());
		if(user!= null) {

			String encodedpassward = passwordEncoder.encode(userdetails.getPassword());
			user.setPassword(encodedpassward);

			User updateUser = userRepository.save(user);
			return ResponseEntity.ok(updateUser);
		}
		return null;
	}	
	
	// Generate OTP
	@PostMapping("/otpgenerator")
	public ResponseEntity<?> sendOtp(@RequestBody User userdetails) {
		User user =userRepository.getUserWithEmail(userdetails.getEmail());
		if(user!= null) {
		String otp = otpGenerator.generateOTP();
		service.sendOtp(userdetails.getEmail(), otp);
		return new ResponseEntity<>("OTP Sent Successfully", HttpStatus.ACCEPTED);
		}
		return new ResponseEntity<>("Not have an Account", HttpStatus.UNAUTHORIZED);
	}

	// Confirm OTP
	@PostMapping("/otpverify/{otp}")
	public String verifyOtp(@PathVariable String otp) {
		boolean res = OtpGenerator.verifyOtp(otp);
		if (res)
			return "OTP verified";
		else
			return "OTP Invalid Please Try Again";
	}

}
