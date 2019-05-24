package br.com.prog2.Prog2.controller;

import java.util.ArrayList;
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

import br.com.prog2.Prog2.exception.ResourceNotFoundException;
import br.com.prog2.Prog2.model.Carro;
import br.com.prog2.Prog2.repository.CarroRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class CarroController {
	@Autowired
	CarroRepository carroRepository;

	// Busca todos os Carros
	@GetMapping("/carros")
	public List<Carro> getAllCarros() {
		return carroRepository.findAll();
	}

	// Criar um novo Carro
	@PostMapping("/carros")
	public Carro createCarro(@Valid @RequestBody Carro carro) {
		return carroRepository.save(carro);
	}

	// Busca um Carro pelo 'id'
	@GetMapping("/carros/{id}")
	public Carro getCarroById(@PathVariable(value = "id") Long carroId) {
		return carroRepository.findById(carroId)
				.orElseThrow(() -> new ResourceNotFoundException("Carro", "id", carroId));
	}
	
	// Busca um Carro pelo modelo
	@GetMapping("/carros/filter/{filter}/{query}")
	public List<Carro> getCarrosByModelo(@PathVariable(value = "filter") String filter, @PathVariable(value = "query") String query ) {
		if (filter.equals("modelo")) {
			return carroRepository.findByModeloContainingIgnoreCase(query);			
		}
		
		return new ArrayList<>();
	}

	// Atualizando Carro
	@PutMapping("/carros/{id}")
	public Carro updateCarro(@PathVariable(value = "id") Long carroId, @Valid @RequestBody Carro carroDetails) {

		carroRepository.findById(carroId).orElseThrow(() -> new ResourceNotFoundException("Carro", "id", carroId));

//	    carro.setModelo(carroDetails.getModelo());
//	    carro.setMarca(carroDetails.getMarca());
//	    carro.setAno(carroDetails.getAno());
//	    carro.setCategoria(carro.getCategoria());

		return carroRepository.save(carroDetails);
	}

	// Deletar um Carro
	@DeleteMapping("/carros/{id}")
	public ResponseEntity<?> deleteCarro(@PathVariable(value = "id") Long carroId) {
		Carro carro = carroRepository.findById(carroId)
				.orElseThrow(() -> new ResourceNotFoundException("Carro", "id", carroId));

		carroRepository.delete(carro);

		return ResponseEntity.ok().build();
	}
}
