package com.example.microservicios.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.microservicios.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    // Puedes agregar métodos personalizados si es necesario
}
