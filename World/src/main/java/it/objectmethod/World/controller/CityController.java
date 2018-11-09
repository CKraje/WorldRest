package it.objectmethod.World.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.objectmethod.World.model.City;
import it.objectmethod.World.repository.CityRepository;

@RestController
public class CityController {

	private final CityRepository cityRepo;

	public CityController(CityRepository repo) {
		this.cityRepo=repo;
	}


	@GetMapping("/cities/{id}/find-by-id")
	public ResponseEntity<City> getCityById(@PathVariable("id") Integer id){

		City city = cityRepo.findOne(id);
		if(city != null) {
			return new ResponseEntity<City>(city, HttpStatus.OK);
		}
		return new ResponseEntity<City>( HttpStatus.NOT_FOUND);	
	}


	@GetMapping("/cities/{countryCode}/find-by-code")
	public ResponseEntity<List<City>> citiesList(@PathVariable("countryCode") String code) {

		List<City> citiesList = cityRepo.findByCode(code);
		if(citiesList.size()>0) {
			return new ResponseEntity<>(citiesList, HttpStatus.OK);
		}	
		return new ResponseEntity<>(citiesList, HttpStatus.NOT_FOUND);
	}

	@PostMapping("/cities/insert_modify")
	public City insertOrUpdateCity (@RequestBody City city) {
		city = cityRepo.save(city);
		return  city;
	}

	@PostMapping("/cities/search")
	public ResponseEntity<List<City>> searchCity(@RequestParam("param") String param) {
		List<City> citiesListByName = cityRepo.findByNameStartingWithOrderByNameAsc(param);
		return new ResponseEntity<>(citiesListByName,HttpStatus.OK);
	}

	@DeleteMapping("cities/delete/{id}") 
	public ResponseEntity<?> deleteCity(@PathVariable("id") Integer id) {

		City city =cityRepo.findOne(id);
		if(city != null) {
			cityRepo.delete(city);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);

	}
}
