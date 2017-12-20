import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { RouterModule, Routes } from '@angular/router';
import {UsuarioService} from './usuario/usuario.service';
import {TarefaService} from './tarefa/tarefa.service';


const appRoutes:Routes = [
  {path:'home',component:AppComponent},
  {path:'usuario',component:UsuarioComponent},
  {path:'tarefa',component:TarefaComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    TarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [UsuarioService, TarefaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
