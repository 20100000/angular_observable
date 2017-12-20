import { Component, OnInit, AfterViewInit } from '@angular/core';
import {TarefaService} from './tarefa.service';
import {UsuarioService} from '../usuario/usuario.service';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.scss']
})
export class TarefaComponent implements OnInit, AfterViewInit {
  public titulo: string = "Tarefas";
  tarefas = [];
  usuarios = [];

  constructor(public userService: UsuarioService, public tafService:TarefaService) {

  }

  ngOnInit() {
  }

  tarefasFun():any{
    this.tafService.getTarefas().subscribe((res: any) => {
      this.tarefas = res.tarefas;
    });
  }

  usuariosFun(){
    this.userService.getUsuarios().subscribe((res: any) => {
      this.usuarios = res.usuarios;
    });
  }

  userName(id){
    var n = "";
    let array = this.usuarios;
    array.forEach(function (value) {
      if (id === value.id ) {
        n = value.name;
      }
    });

    return n;
  }

  ngAfterViewInit(){
    this.tarefasFun();
    this.usuariosFun();
  }

}
