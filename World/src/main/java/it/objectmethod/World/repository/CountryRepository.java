package it.objectmethod.World.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import it.objectmethod.World.model.Country;

public interface CountryRepository extends JpaRepository<Country, String>{

	@Query("SELECT DISTINCT continent FROM  Country")
	public List<String> findAllContinents();

	public List<Country> findByContinent(String continent);
}
