package com.app.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.model.TestBooking;

public interface BookingRepository extends JpaRepository<TestBooking, Long>
{

//@Modifying
@Query(value ="SELECT * from testbooking where userId = ? ORDER BY patientId DESC" ,nativeQuery = true)
List<TestBooking> getBookedUser(long id);


}
