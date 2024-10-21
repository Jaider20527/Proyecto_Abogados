package com.example.ClientAPI.entities;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "clientes")
@Setter
@Getter
@ToString
@EqualsAndHashCode

public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String nombre;
    private String apellido;
    private String email;
    private String cedula;
    private String telefono;
    private String direccion;

}
