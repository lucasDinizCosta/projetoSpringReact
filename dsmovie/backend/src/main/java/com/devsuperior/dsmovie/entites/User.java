package com.devsuperior.dsmovie.entites;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

// Especificações para que o JPA reconheça o modelo de entidade para
// o banco de dados
// tb_movie é o nome da tabela do banco de dados
@Entity	
@Table(name = "tb_user")
public class User {
	
	// Atribui o ID da tabela do banco de dados e define que é autoincrement
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String email;
	
	public User() {
	}

	public User(Long id, String email) {
		this.id = id;
		this.email = email;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}
