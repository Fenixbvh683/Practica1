import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './componentes/error404/error404.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { GuardGuard } from './servicios/guard.guard';


const routes: Routes = [
    {path: 'porfolio', component:PorfolioComponent, canActivate:[GuardGuard]},
    {path: 'iniciar-sesion', component:IniciarSesionComponent},
    {path: '', component:InicioComponent},
    {path: '**', component: Error404Component},
    {path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
