package dev.arley.CasosAPI.services;

import dev.arley.CasosAPI.entities.Casos;
import dev.arley.CasosAPI.repository.CasosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CasosService implements ICasosService {

    @Autowired
    private CasosRepository repository;

    @Override
    public List<Casos> getAll(){
        return (List<Casos>) repository.findAll();
    }

    public void save(Casos casos){this.repository.save(casos);}


}
