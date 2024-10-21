package dev.arley.LawyerAPI.services;

import dev.arley.LawyerAPI.entities.Lawyer;
import dev.arley.LawyerAPI.repository.LawyerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LawyerService implements ILawyerService{

    @Autowired
    private LawyerRepository repository;

    @Override
    public List<Lawyer> getAll(){ return (List<Lawyer>) repository.findAll();}

    public void save(Lawyer lawyer){this.repository.save(lawyer);}


}
