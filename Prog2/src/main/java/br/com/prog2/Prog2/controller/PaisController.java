package br.com.prog2.Prog2.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.prog2.Prog2.repository.PaisRepository;
import br.com.prog2.Prog2.exception.ResourceNotFoundException;
import br.com.prog2.Prog2.model.Pais;

@RestController
@RequestMapping("/api")
public class PaisController {
	@Autowired
	PaisRepository paisRepository;

	// Busca todos os Países
	@GetMapping("/paises")
	public List<Pais> getAllPaises() {
		return paisRepository.findAll();
	}

	// Criar um novo País
	@PostMapping("/paises")
	public Pais createPais(@Valid @RequestBody Pais pais) {
		return paisRepository.save(pais);
	}

	// Busca um País pelo 'id'
	@GetMapping("/paises/{id}")
	public Pais getPaisById(@PathVariable(value = "id") Long paisId) {
		return paisRepository.findById(paisId).orElseThrow(() -> new ResourceNotFoundException("País", "id", paisId));
	}

	// Atualizando País
	@PutMapping("/paises/{id}")
	public Pais updatePais(@PathVariable(value = "id") Long paisId, @Valid @RequestBody Pais paisDetails) {

		paisRepository.findById(paisId).orElseThrow(() -> new ResourceNotFoundException("País", "id", paisId));

//		    carro.setModelo(carroDetails.getModelo());
//		    carro.setMarca(carroDetails.getMarca());
//		    carro.setAno(carroDetails.getAno());
//		    carro.setCategoria(carro.getCategoria());

		return paisRepository.save(paisDetails);
	}

	// Deletar um País
	@DeleteMapping("/paises/{id}")
	public ResponseEntity<?> deletePais(@PathVariable(value = "id") Long paisId) {
		Pais pais = paisRepository.findById(paisId)
				.orElseThrow(() -> new ResourceNotFoundException("País", "id", paisId));

		paisRepository.delete(pais);

		return ResponseEntity.ok().build();
	}
}
