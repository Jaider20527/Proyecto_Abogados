package com.example.ClientAPI.services;

import com.example.ClientAPI.entities.Client;

import java.util.List;

public interface IClientService {
    List<Client> getAll();

    // metodo POST
    void save(Client client);
}
