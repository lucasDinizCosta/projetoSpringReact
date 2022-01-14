package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entites.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	// Padrão do Spring JPA: faz a busca por email
	User findByEmail(String email);

}
