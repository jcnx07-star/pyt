
package com.tuempresa.tienda.controller;

import com.tuempresa.tienda.model.Usuario;
import com.tuempresa.tienda.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:3000")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping
    public List<Usuario> getAll() {
        return usuarioRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Usuario> getById(@PathVariable Long id) {
        return usuarioRepository.findById(id);
    }

    @PostMapping
    public Usuario create(@RequestBody Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    @PutMapping("/{id}")
    public Usuario update(@PathVariable Long id, @RequestBody Usuario detalles) {
        return usuarioRepository.findById(id).map(u -> {
            u.setNombre(detalles.getNombre());
            u.setCorreo(detalles.getCorreo());
            return usuarioRepository.save(u);
        }).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        usuarioRepository.deleteById(id);
    }
}
