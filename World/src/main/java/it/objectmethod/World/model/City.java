package it.objectmethod.World.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="city")
public class City {

	@Id
	@GeneratedValue
	private Integer id;
	
	private String name;
	private int population;
	
	@Column(name="CountryCode")
	private String code;
	
	private String district;
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPopulation() {
		return population;
	}
	public void setPopulation(int population) {
		this.population = population;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getDistrict() {
		return district;
	}
	public void setDistrict(String district) {
		this.district = district;
	}	
}
