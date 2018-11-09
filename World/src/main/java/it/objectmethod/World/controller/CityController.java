package it.objectmethod.World.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import it.objectmethod.World.model.City;
import it.objectmethod.World.repository.CityRepository;

@RestController
public class CityController {

	private final CityRepository cityRepo;

	public CityController(CityRepository repo) {
		this.cityRepo=repo;
	}


	@GetMapping("/cities/find-by-id/{id}")
	public ResponseEntity<City> getCityById(@PathVariable("id") Integer id){

		City city = cityRepo.findOne(id);
		if(city != null) {
			return new ResponseEntity<City>(city, HttpStatus.OK);
		}
		return new ResponseEntity<City>( HttpStatus.NOT_FOUND);	}


	@GetMapping("/cities/find-by-code/{countryCode}")
	public ResponseEntity<List<City>> citiesList(@PathVariable("countryCode") String code) {

		List<City> citiesList = cityRepo.findByCode(code);
		if(citiesList.size()>0) {
			return new ResponseEntity<>(citiesList, HttpStatus.OK);
		}	
		return new ResponseEntity<>(citiesList, HttpStatus.NOT_FOUND);
	}

	@PostMapping("/cities/insert_modify")
	public ResponseEntity<?> insertOrUpdateCity (@RequestBody City city) {

		City cityById = cityRepo.findOne(city.getId());
		boolean statusUpdated= false;
		if(cityById != null) {
			statusUpdated=true;
		}
		City cityNew = new City();
		cityNew.setName(city.getName());
		cityNew.setCode(city.getCode());  
		cityNew.setPopulation(city.getPopulation());
		cityNew.setDistrict(city.getDistrict());
		cityNew.setId(city.getId());
		cityNew = cityRepo.save(cityNew);

		if(statusUpdated) {
			return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return  new ResponseEntity<>(HttpStatus.CREATED);

	}

	@GetMapping("/cities/search/find-by-name/{name}")
	public ResponseEntity<List<City>> searchCity(@PathVariable("name") String name) {

		List<City> citiesListByName = cityRepo.findByNameStartingWithOrderByNameAsc(name);
		if(citiesListByName.size()>0) {
			return new ResponseEntity<>(citiesListByName,HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);	
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
