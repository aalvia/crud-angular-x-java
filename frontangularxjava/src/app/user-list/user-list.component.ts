import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Usuario } from '../usuario.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  users: Usuario[] = [];
  isLoading: boolean = false;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  deleteUser(id?: number) {
    this.isLoading = true; 
    if (id !== undefined) {
      if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
        this.userService.deleteUser(id).subscribe(() => {
          this.loadUsers();
          this.isLoading = false;
        });
      }

    } else {
      this.isLoading = false;
      console.error('El ID del usuario es undefined');
    }
  }
  editUser(id?: number) {
    // Verifica si id no es undefined
    if (id !== undefined) {
      // Redirige a la página de edición del usuario con el ID correspondiente
      this.router.navigate(['/edit-user', id]);
     
    } else {
      console.error('El ID del usuario es undefined');
    }
  }
}
