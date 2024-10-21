package dev.arley.CasosAPI.repository;

import dev.arley.CasosAPI.entities.Casos;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CasosRepository extends CrudRepository<Casos, Long> {
}
