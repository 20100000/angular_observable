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
  status = [];

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

  statusFun():any{
    this.tafService.getStatus().subscribe((res: any) => {

      this.status = res.status;
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

  statusName(id){
    var n = "";
    let array = this.status;
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
      this.statusFun();
  }

}
