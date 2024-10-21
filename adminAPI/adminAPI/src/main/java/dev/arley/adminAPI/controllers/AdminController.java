package dev.arley.adminAPI.controllers;


import dev.arley.adminAPI.entities.Admin;
import dev.arley.adminAPI.repository.AdminRepository;
import dev.arley.adminAPI.services.IAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AdminController    {

    @Autowired
    private IAdminService service;

    @Autowired
    private AdminRepository adminRepository;

    @GetMapping("Admin")
    public List<Admin> getAll(){return service.getAll();}

    @PostMapping({"CrearAdmin"})
    public void save (@RequestBody Admin admin){this.service.save(admin);}





}
