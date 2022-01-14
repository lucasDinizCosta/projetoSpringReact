package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entites.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{
	// Objeto responsável por acessar, salvar e operar no banco de dados
	

}
