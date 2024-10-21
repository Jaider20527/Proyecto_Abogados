package dev.arley.CasosAPI.entities;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Entity
@Table(name= "casos")
@Setter
@Getter
@ToString
@EqualsAndHashCode


public class Casos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String cliente;
    private String tipocaso;
    private String fechainicio;
    private String fechacierre;
    private String prioridad;
    private String estado;
    private String descripcioncaso;
    private String abogadoasignado;
}
