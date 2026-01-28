package com.example.demo_api.model;

import java.time.LocalDate;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Entity
public class User {

    @NotBlank
    @Pattern(regexp = "^\\d-\\d{4}-\\d{4}$", message = "La cedula tiene que ser x-xxxx-xxxx")
    private String cedula;

    @NotBlank
    @Size(min = 3, max = 100, message = "El nombre tiene que tener una longitud de 3 - 100")
    private String nombre;

    @NotBlank
    @Size(min = 3, max = 100, message = "El apellido tiene que tener una longitud de 3 - 100")
    private String apellido;

    @Email
    private String email;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate fecha_nacimiento;
    
    private boolean activo;

    public User () {

    }

    public void setCedula (String cedula){
        this.cedula = cedula;
    }

    public void setNombre (String nombre){
        this.nombre = nombre;
    }

    public void setApellido (String apellido){
        this.apellido = apellido;
    }

    public void setEmail (String email){
        this.email = email;
    }

    public String getCedula () {
        return cedula;
    }

    public String getNombre () {
        return nombre;
    }
    
    public String getApellido () {
        return apellido;
    }
    
    public String getEmail () {
        return email;
    }
    
    public boolean getActivo () {
        return activo;
    }
}
