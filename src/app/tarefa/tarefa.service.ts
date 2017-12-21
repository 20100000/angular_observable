import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class TarefaService {

  constructor(private http:Http) {

  }

getTarefas(): Observable<any> {
    let res;
    return this.http.get("./assets/json/tarefa.json")
        .timeout(3000)
        .map(res => {
            let body = res.json();
            return body ;
        });
  }

  getStatus(): Observable<any> {
    let res;
    return this.http.get("./assets/json/status.json")
        .timeout(3000)
        .map(res => {
            let body = res.json();
            return body ;
        });
  }

}
