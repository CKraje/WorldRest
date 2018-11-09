package it.objectmethod.World.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import it.objectmethod.World.model.City;

public interface CityRepository extends JpaRepository<City, Integer> {

	public List<City> findByCode(String code);

	public List<City> findByNameStartingWithOrderByNameAsc(String name);
}
