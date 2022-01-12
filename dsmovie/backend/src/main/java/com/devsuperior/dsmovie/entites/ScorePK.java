package com.devsuperior.dsmovie.entites;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Embeddable
public class ScorePK implements Serializable{
	
	/**
	 * O atributo composto no JPA deve ser serializado, ou seja,
	 * para facilitar a transformação em bytes no trafego de dados
	 */
	private static final long serialVersionUID = 1L;

	// Configurando a chave estrangeira
	@ManyToOne
	@JoinColumn(name = "movie_id")
	private Movie movie;
	
	// Configurando a chave estrangeira
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	public ScorePK() {
	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
}
