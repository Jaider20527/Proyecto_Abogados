package dev.arley.adminAPI.services;

import dev.arley.adminAPI.entities.Admin;
import dev.arley.adminAPI.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService implements IAdminService{

    @Autowired
    private AdminRepository repository;

    @Override
    public List<Admin> getAll(){return (List<Admin>) repository.findAll();}

    public void save (Admin admin){this.repository.save(admin);}

}
