package br.com.prog2.Prog2.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.prog2.Prog2.repository.CidadeRepository;
import br.com.prog2.Prog2.exception.ResourceNotFoundException;
import br.com.prog2.Prog2.model.Cidade;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class CidadeController {
	@Autowired
	CidadeRepository cidadeRepository;

	// Busca todas as Cidades
	@GetMapping("/cidades")
	public List<Cidade> getAllCidades() {
		return cidadeRepository.findAll();
	}

	// Criar uma nova Cidade
	@PostMapping("/cidades")
	public Cidade createCidade(@Valid @RequestBody Cidade cidade) {
		return cidadeRepository.save(cidade);
	}

	// Busca uma Cidade pelo 'id'
	@GetMapping("/cidades/{id}")
	public Cidade getCidadeById(@PathVariable(value = "id") Long cidadeId) {
		return cidadeRepository.findById(cidadeId)
				.orElseThrow(() -> new ResourceNotFoundException("Cidade", "id", cidadeId));
	}

	// Atualizando Cidade
	@PutMapping("/cidades/{id}")
	public Cidade updateCidade(@PathVariable(value = "id") Long cidadeId, @Valid @RequestBody Cidade cidadeDetails) {

		cidadeRepository.findById(cidadeId).orElseThrow(() -> new ResourceNotFoundException("Cidade", "id", cidadeId));

//		    carro.setModelo(carroDetails.getModelo());
//		    carro.setMarca(carroDetails.getMarca());
//		    carro.setAno(carroDetails.getAno());
//		    carro.setCategoria(carro.getCategoria());

		return cidadeRepository.save(cidadeDetails);
	}

	// Deletar uma Cidade
	@DeleteMapping("/cidades/{id}")
	public ResponseEntity<?> deleteCidade(@PathVariable(value = "id") Long cidadeId) {
		Cidade cidade = cidadeRepository.findById(cidadeId)
				.orElseThrow(() -> new ResourceNotFoundException("Cidade", "id", cidadeId));

		cidadeRepository.delete(cidade);

		return ResponseEntity.ok().build();
	}
}
