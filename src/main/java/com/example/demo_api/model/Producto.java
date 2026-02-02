package com.example.demo_api.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "Producto")
public class Producto {

    @Id
    private int id_producto;

    @NotBlank
    private String nombre;

    @NotBlank
    private int cantidad;

    @NotBlank
    private double precio;

    public Producto () {

    }

    //Setters and Getters
    public void setNombre (String nombre){
        this.nombre = nombre;
    }

    public void setCantidad (int cantidad){
        this.cantidad = cantidad;
    }

    public void setPrecio (double precio){
        this.precio = precio;
    }

    public int getId_producto (){
        return this.id_producto;
    }
    
    public double getPrecio (){
        return this.precio;
    }

    public String getNombre (){
        return this.nombre;
    }

    public int getCantidad (){
        return this.cantidad;
    }
}
