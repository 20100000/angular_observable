import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';


@Injectable()
export class UsuarioService {

  constructor(private http:Http) {}


  getUsuarios(): Observable<any> {
    let res;
      return this.http.get("./assets/json/usuario.json")
        .timeout(30000)
        .map(res => {
          let body = res.json();
          console.log('bodyyyyy',body);
          return body ;
        });
       // .catch((error:any) => console.log(error));

  }

}
