package com.tuempresa.tienda.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolaMundoController {

    @GetMapping("/hola-mundo")
    public String holaMundo() {
        return "¡Hola Mundo desde el backend de la Tienda Virtual!";
    }
}
