import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class TarefaService {

  constructor(private http:Http) {

  }

  getTarefas() {
      return this.http.get('../../assets/json/tarefa.json').map(data=>{
          console.log(data);
      });
  }

}
