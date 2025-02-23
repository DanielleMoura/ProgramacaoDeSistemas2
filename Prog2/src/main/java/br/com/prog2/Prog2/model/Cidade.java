package br.com.prog2.Prog2.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="cidade")
public class Cidade {
	@Id
	@GeneratedValue
	private Long id;
	private String nome;
	private String estado;
	private String pais;
	private Long populacao;
	
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
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}
	public String getPais() {
		return pais;
	}
	public void setPais(String pais) {
		this.pais = pais;
	}
	public Long getPopulacao() {
		return populacao;
	}
	public void setPopulacao(Long populacao) {
		this.populacao= populacao;
	}
}
