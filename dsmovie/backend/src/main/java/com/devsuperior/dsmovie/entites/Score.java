package com.devsuperior.dsmovie.entites;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

//Especificações para que o JPA reconheça o modelo de entidade para
//o banco de dados
//tb_movie é o nome da tabela do banco de dados
@Entity	
@Table(name = "tb_score")
public class Score {

	// Atribui o ID da tabela do banco de dados e define que é autoincrement
	// Este ID é um atributo composto e deste modo tratado de forma diferente
	@EmbeddedId
	private ScorePK id = new ScorePK();
	private Double value;
	
	// O JPA não aceita chave primaria composta
	// logo a solução é criar uma classe auxiliar que
	// represente a chave composta
	
	// Para chave composta no java tem que colocar o new pra ter certeza
	// que está instanceada 
	
	public Score() {
	}
	
	public void setMovie(Movie movie) {
		id.setMovie(movie);
	}
	
	public void setUser(User user) {
		id.setUser(user);
	}

	public ScorePK getId() {
		return id;
	}

	public void setId(ScorePK id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}
}
