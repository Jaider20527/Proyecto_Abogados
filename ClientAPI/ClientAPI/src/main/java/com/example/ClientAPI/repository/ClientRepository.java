package com.example.ClientAPI.repository;

import com.example.ClientAPI.entities.Client;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends CrudRepository <Client, Long> {


}
