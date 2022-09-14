package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> 
{

}
