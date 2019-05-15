package br.com.prog2.Prog2.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="pais")
public class Pais {
	@Id
	@GeneratedValue
	private Long id; 
	private String nome;
	private String continente;
	private String populacao;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getContinente() {
		return continente;
	}
	public void setContinente(String continente) {
		this.continente = continente;
	}
	public String getPopulacao() {
		return populacao;
	}
	public void setPopulacao(String populacao) {
		this.populacao = populacao;
	}
	
}
