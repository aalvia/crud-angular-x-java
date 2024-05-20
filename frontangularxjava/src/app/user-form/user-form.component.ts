import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Usuario } from '../usuario.model';

import { NgForm } from '@angular/forms'; 
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {
  usuario: Usuario = new Usuario(
    '', // tipoIdentificacion
    '', // identificacion
    '', // nombres
    '', // apellidos
    '', // roles
    0,  // edad
); isLoading: boolean = false;
  constructor(private userService: UserService, private router: Router) {}

  addUser(form:NgForm) {
    if (!form.valid) {
      alert("Por favor, complete todos los campos.");
      return;
    }
    this.isLoading = true;
    this.userService.addUser(this.usuario).subscribe(() => {
      this.isLoading = false;
      this.router.navigate(['/']);

    });
  }
  onlyNumbers(event: KeyboardEvent) {
    const charCode = event.charCode || event.keyCode;
    // Permite solo números (código ASCII entre 48 y 57)
    if (charCode < 48 || charCode > 57) {
      event.preventDefault(); // Previene el evento si no es un número
    }
  }
}
