package com.example.ClientAPI.controllers;


import com.example.ClientAPI.entities.Client;
import com.example.ClientAPI.repository.ClientRepository;
import com.example.ClientAPI.services.IClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController

public class ClientController {

    @Autowired
    private IClientService service;

    @Autowired
    private ClientRepository clientRepository;

    //metodo GET
    @GetMapping("Clientes")
    public List<Client> getAll(){return service.getAll();}

    //metodo POST
    @PostMapping({"CrearClientes"})
    public void save (@RequestBody Client client) {this.service.save(client);}



}
