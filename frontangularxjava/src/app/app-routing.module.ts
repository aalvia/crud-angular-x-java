import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserEditComponent } from './user-edit/user-edit.component';


const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'add-user', component: UserFormComponent },
  { path: 'edit-user/:id', component: UserEditComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
