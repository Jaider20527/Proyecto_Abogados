package dev.arley.LawyerAPI.controllers;

import dev.arley.LawyerAPI.entities.Lawyer;
import dev.arley.LawyerAPI.repository.LawyerRepository;
import dev.arley.LawyerAPI.services.ILawyerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LawyerController {

    @Autowired
    private ILawyerService service;

    @Autowired
    private LawyerRepository lawyerRepository;

    @GetMapping("Abogados")
    public List<Lawyer> getAll(){
        return service.getAll();
    }


    @PostMapping({"CrearAbogados"})
    public void save (@RequestBody Lawyer lawyer){this.service.save(lawyer);}
}
