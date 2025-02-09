import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';



const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'novo-usuario', component: NovoUsuarioComponent},
  {path: 'editar-usuario', component: EditarUsuarioComponent},
  {path: 'login', component: LoginComponent},  
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: '**', redirectTo: 'auth', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
