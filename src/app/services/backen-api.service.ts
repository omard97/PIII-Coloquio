import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class BackenApiService {

  constructor(private http: HttpClient) { 
    
  }

  /* metodo get */
  getclientes():Observable<cliente[]> {
 
    return this.http.get<cliente[]>("http://localhost:59896/api/clientes")

  } 


}
