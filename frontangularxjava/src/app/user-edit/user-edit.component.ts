import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Usuario } from '../usuario.model';

import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
})
export class UserEditComponent implements OnInit {

  id: number = 0; // Inicializa id a 0
  usuario: Usuario = new Usuario('', '', '', '', '', 0);
  isLoading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.userService.getUserById(this.id).subscribe((data) => {
      this.usuario = data;
    });
  }

  updateUser(form: NgForm) {
    if (!form.valid) {
      alert("Por favor, complete todos los campos.");
      return;
    }
    this.isLoading = true;
    this.userService.updateUser(this.id, this.usuario).subscribe(() => {
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
