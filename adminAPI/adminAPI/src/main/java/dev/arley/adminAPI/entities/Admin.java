package dev.arley.adminAPI.entities;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "administrador")
@Setter
@Getter
@ToString
@EqualsAndHashCode

public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String nombre;
    private String apellido;
    private String email;
    private String cargo;
    private String cedula;
    private String telefono;
    private String direccion;

}
