package com.tuempresa.tienda.controller;

import com.tuempresa.tienda.model.Producto;
import com.tuempresa.tienda.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductoController {

    @Autowired
    private ProductoRepository productoRepository;

    @GetMapping
    public List<Producto> getAll() {
        return productoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Producto> getById(@PathVariable Long id) {
        return productoRepository.findById(id);
    }

    @PostMapping
    public Producto create(@RequestBody Producto producto) {
        return productoRepository.save(producto);
    }

    @PutMapping("/{id}")
    public Producto update(@PathVariable Long id, @RequestBody Producto detalles) {
        return productoRepository.findById(id).map(p -> {
            p.setNombre(detalles.getNombre());
            p.setPrecio(detalles.getPrecio());
            p.setStock(detalles.getStock());
            return productoRepository.save(p);
        }).orElseThrow(() -> new RuntimeException("Producto no encontrado"));
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        productoRepository.deleteById(id);
    }
}
