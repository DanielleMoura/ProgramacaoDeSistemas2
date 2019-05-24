package br.com.prog2.Prog2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.prog2.Prog2.model.Pais;

public interface PaisRepository extends JpaRepository<Pais, Long> {
	
	List<Pais> findByContinenteContainingIgnoreCase(String continente);

}
