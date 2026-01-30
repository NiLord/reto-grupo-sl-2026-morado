package com.example.demo_api.model;

import java.time.LocalDate;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "users")
public class User {

    @Id
    @Pattern(regexp = "^\\d-\\d{4}-\\d{4}$", message = "La cedula tiene que ser x-xxxx-xxxx")
    private String cedula;

    @NotBlank
    @Size(min = 3, max = 100, message = "El nombre tiene que tener una longitud de 3 - 100")
    private String nombre;

    @NotBlank
    @Size(min = 3, max = 100, message = "El apellido tiene que tener una longitud de 3 - 100")
    private String apellido;

    @NotBlank
    String password;

    @Email
    private String email;

    @Column(name = "fecha_nacimiento", insertable = false)
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

    public void setPassword (String password){
        this.password = password;
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

    public String getPassword () {
        return password;
    }
    
    public String getEmail () {
        return email;
    }
    
    public boolean getActivo () {
        return activo;
    }
}
