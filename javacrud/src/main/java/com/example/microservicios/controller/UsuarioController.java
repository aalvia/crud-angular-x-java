package com.example.microservicios.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.microservicios.repository.*;

import com.example.microservicios.entity.*;

import java.util.List;

@RestController
 @CrossOrigin(origins = "*")
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping
    public List<Usuario> obtenerTodos() {
        return usuarioRepository.findAll();
        
    }

    @GetMapping("/{id}")
    public Usuario obtenerPorId(@PathVariable Long id) {
        return usuarioRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Usuario crearUsuario(@RequestBody Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    @PutMapping("/{id}")
    public Usuario actualizarUsuario(@PathVariable Long id, @RequestBody Usuario usuario) {
        Usuario existente = usuarioRepository.findById(id).orElse(null);
        if (existente != null) {
            existente.setTipoIdentificacion(usuario.getTipoIdentificacion());
            existente.setIdentificacion(usuario.getIdentificacion());
            existente.setNombres(usuario.getNombres());
            existente.setApellidos(usuario.getApellidos());
            existente.setRoles(usuario.getRoles());
            existente.setEdad(usuario.getEdad());
            existente.setGenero(usuario.getGenero());
            return usuarioRepository.save(existente);
        } else {
            return null;
        }
    }

    @DeleteMapping("/{id}")
    public void eliminarUsuario(@PathVariable Long id) {
        usuarioRepository.deleteById(id);
    }
}
