package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.model.User;

public interface UserRepository extends JpaRepository<User, Long>

{
	
User findByEmail(String email);

@Modifying
@Query(value ="INSERT into user (firstName,lastName,email,password) VALUES (?1,?2,?3,?4)",nativeQuery = true)
int addUser(String firstName,String lastName,String email,String password);



}
