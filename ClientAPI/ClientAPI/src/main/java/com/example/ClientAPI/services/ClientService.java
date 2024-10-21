package com.example.ClientAPI.services;

import com.example.ClientAPI.entities.Client;
import com.example.ClientAPI.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService implements IClientService {

    @Autowired
    private ClientRepository repository;

    @Override
    public List<Client> getAll(){
        return (List<Client>) repository.findAll();
    }

    // Creación metodo POST
    public void save(Client client){this.repository.save(client);}

}
