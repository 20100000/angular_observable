import { Component, OnInit, AfterViewInit } from '@angular/core';
import {UsuarioService} from './usuario.service'
import {TarefaService} from '../tarefa/tarefa.service'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit, AfterViewInit {

  public titulo: string = "Usuários";
  usuarios = [];
  tarefas  = [];

  constructor(public userService: UsuarioService, public tafService:TarefaService) {

  }

  ngOnInit() {

  }

  usuariosFun(){
       this.userService.getUsuarios().subscribe((res: any) => {
            this.usuarios = res.usuarios;
       });
  }

  tarefasFun():any{
      this.tafService.getTarefas().subscribe((res: any) => {
          this.tarefas = res.tarefas;
      });
  }

  tarefasId(id){
      var cont = this.tarefas.filter(use => use.idUsuario === id);
      return cont.length;
  }



  ngAfterViewInit(){
      this.usuariosFun();
      this.tarefasFun();
  }

}
