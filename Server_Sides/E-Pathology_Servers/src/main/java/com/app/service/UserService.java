package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.dto.Credentials;
import com.app.model.User;
import com.app.repo.UserRepository;

@Service
@Transactional
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	PasswordEncoder passwordEncoder;

//	  public User SignUp(User u) {
//	        User result=userRepository.save(u);
//	        return result;
//	    }
	  
	  public User FindByEmailAndPassword(Credentials cred)
	  {
		  User dbuser=userRepository.findByEmail(cred.getEmail());
		  String rawpassword =cred.getPassword();
		  if(dbuser!= null && passwordEncoder.matches(rawpassword,dbuser.getPassword()))
		  return dbuser;
		  return null;
	  }
	  
	  public int saveuser(User newuser)
	  {
		  String rawpassward = newuser.getPassword();
		  String encodedpassward = passwordEncoder.encode(rawpassward);
		  newuser.setPassword(encodedpassward);
		  return userRepository.addUser(newuser.getFirstName(),newuser.getLastName(),newuser.getEmail(),newuser.getPassword());
		
	 }
}
