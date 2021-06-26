import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cliente } from '../model/cliente';
import { producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class BackenApiService {

  constructor(private http: HttpClient) { 
    
  }

  /* metodo get */
  getclientes():Observable<cliente[]> {


   /*  return this.http.get<cliente[]>("http://localhost:62646/api/clientes") */

   /* return this.http.get<cliente[]>("http://localhost:59310/api/clientes") */

   /* return this.http.get<cliente[]>("http://localhost:62646/api/clientes") */ /* crud test 2015 */

   return this.http.get<cliente[]>(" https://localhost:44383/api/cliente")
   
     /* return this.http.get<cliente[]>("http://localhost:59896/api/clientes") */ /* esta en la carpeta de prog 3 */

  } 

  getproductos():Observable<producto[]> {
    return this.http.get<producto[]>("https://localhost:44383/api/producto")
   }


}
