package dev.arley.CasosAPI.services;

import dev.arley.CasosAPI.entities.Casos;

import java.util.List;

public interface ICasosService {
    List<Casos> getAll();

    void save(Casos casos);
}
