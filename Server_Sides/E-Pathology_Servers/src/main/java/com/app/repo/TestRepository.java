package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.model.Test;

public interface TestRepository extends JpaRepository<Test, Long>
{
	
}
