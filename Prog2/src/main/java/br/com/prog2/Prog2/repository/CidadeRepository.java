package br.com.prog2.Prog2.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.prog2.Prog2.model.Carro;

public interface CidadeRepository extends JpaRepository<Carro, Long> {

}
