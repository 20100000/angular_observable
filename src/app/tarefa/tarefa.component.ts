import { Component, OnInit, AfterViewInit } from '@angular/core';
import {TarefaService} from './tarefa.service';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.scss']
})
export class TarefaComponent implements OnInit, AfterViewInit {
  public titulo: string = "Tarefas";


  constructor(public tarefaService:TarefaService) {

  }

  ngOnInit() {
  }

  ngAfterViewInit(){

  }

}
