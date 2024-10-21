package dev.arley.adminAPI.services;

import dev.arley.adminAPI.entities.Admin;

import java.util.List;

public interface IAdminService {
    List<Admin> getAll();

    void save (Admin admin);
}
