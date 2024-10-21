package dev.arley.LawyerAPI.services;

import dev.arley.LawyerAPI.entities.Lawyer;

import java.util.List;


public interface ILawyerService {
    List<Lawyer> getAll();

    void save (Lawyer lawyer);
}
