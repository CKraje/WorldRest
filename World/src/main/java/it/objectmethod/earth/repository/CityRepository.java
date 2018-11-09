package it.objectmethod.earth.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import it.objectmethod.earth.model.City;

public interface CityRepository extends JpaRepository<City, Integer> {

	public List<City> findByCode(String code);

	public List<City> findByNameStartingWithOrderByNameAsc(String name);
}
