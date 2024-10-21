package dev.arley.CasosAPI.controllers;

import dev.arley.CasosAPI.entities.Casos;
import dev.arley.CasosAPI.repository.CasosRepository;
import dev.arley.CasosAPI.services.ICasosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CasosController {

    @Autowired
    private ICasosService service;

    @Autowired
    private CasosRepository casosRepository;

    @GetMapping("Casos")
    public List<Casos> getAll(){
        return service.getAll();
    }


    @PostMapping({"CrearCasos"})
    public void save (@RequestBody Casos casos){this.service.save(casos);}

}
