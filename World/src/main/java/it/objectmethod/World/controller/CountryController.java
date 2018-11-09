package it.objectmethod.World.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import it.objectmethod.World.model.Country;
import it.objectmethod.World.repository.CountryRepository;

@RestController
public class CountryController {

	private final CountryRepository countryRepo;

	public CountryController(CountryRepository repo) {
		this.countryRepo=repo;
	}

	@GetMapping("/continents")
	public List<String> getAllContinents(){

		List<String> continentList = countryRepo.findAllContinents();
		return continentList;

	}

	@GetMapping("/countries/{continent}/find-by-continent")
	public ResponseEntity<List<Country>>  getCountriesListByContinent(
			@PathVariable("continent")String continent){

		List<Country> countriesListByCode = countryRepo.findByContinent(continent);
		if(countriesListByCode.size()>0) {
			return new ResponseEntity<>(countriesListByCode, HttpStatus.OK);
		}
		return new ResponseEntity<>(countriesListByCode, HttpStatus.NOT_FOUND);

	}	
}
