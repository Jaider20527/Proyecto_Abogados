package dev.arley.LawyerAPI.repository;

import dev.arley.LawyerAPI.entities.Lawyer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LawyerRepository extends CrudRepository<Lawyer,Long> {

}
