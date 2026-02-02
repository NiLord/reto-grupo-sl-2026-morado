package com.example.demo_api.model;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;

@Entity
@Table(name = "monedero")
public class Monedero {
    
    @Id
    @Column(name = "id_monedero", nullable = false)
    private Integer idMonedero;
    
    @Column(name = "denominacion", nullable = false, precision = 10, scale = 2)
    private BigDecimal denominacion;
    
    @Column(name = "tipo", nullable = false)
    private Boolean tipo; // true = Billete, false = Moneda
    
    @Column(name = "cantidad", nullable = false)
    private Integer cantidad;

    //getters and setters

    public Integer getIdMonedero() {
        return idMonedero;
    }  

    public BigDecimal getDenominacion() {
        return denominacion;
    }

    public Boolean getTipo() {
        return tipo;
    }

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public void setTipo(Boolean tipo) {
        this.tipo = tipo;
    }

    public void setDenominacion(BigDecimal denominacion) {
        this.denominacion = denominacion;
    }

    public void setIdMonedero(Integer idMonedero) {
        this.idMonedero = idMonedero;
    }

}
