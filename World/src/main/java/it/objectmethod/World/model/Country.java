package it.objectmethod.World.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.Getter;

@Data
@Getter
@Entity
@Table(name="country")
public class Country {
	
	@Id
	@GeneratedValue
	private String code;
	
	private String name;
	@Column(name="continent")
	private String continent;
	
	private int population;
	
	
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getContinent() {
		return continent;
	}
	public void setContinent(String continent) {
		this.continent = continent;
	}
	public int getPopulation() {
		return population;
	}
	public void setPopulation(int population) {
		this.population = population;
	}
}
