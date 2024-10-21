package dev.arley.LawyerAPI.entities;


import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "abogados")
@Setter
@Getter
@ToString
@EqualsAndHashCode

public class Lawyer {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)

    private Long id;
    private String nombre;
    private String apellido;
    private String email;
    private String cedula;
    private String tipoabogado;
    private String telefono;
    private String direccion;
    private String imagen;

}
