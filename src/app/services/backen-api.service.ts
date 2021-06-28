import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cliente } from '../model/cliente';
import { producto } from '../model/producto';

@Injectable({
  providedIn: 'root',
})
export class BackenApiService {
  

  myAppUrl= 'https://localhost:44383';
  myApiUrl= '/api/producto';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  

  constructor(private http: HttpClient) {}

  /* metodo get */
  getclientes(): Observable<cliente[]> {
    return this.http.get<cliente[]>(' https://localhost:44383/api/cliente');
  }

  getproductos(): Observable<producto[]> {
    return this.http.get<producto[]>('https://localhost:44383/api/producto');
  }
  /* postproducto(producto: producto): Observable<producto>
  {
  } */

  crearProd(prod: any ):Observable<any>{

    //let produ = JSON.stringify(prod);
    // let cabecera = new HttpHeaders();
    // cabecera.append('Content-Type', 'application/json');
    //debugger
    console.log(prod);
    return this.http.post('https://localhost:44383/api/producto',prod,this.httpOptions);
  }

  editprod(Eprod: producto):Observable<any>{
    var dato = JSON.stringify(Eprod);
    debugger
    return this.http.put('https://localhost:44383/api/producto/'+Eprod.idProducto,dato,this.httpOptions)
  }

  // Postproducto(producto: producto ):Observable<producto>{
     
  //   //  var nombre = producto.nombre;
  //   //  var precio = producto.precio;
  //    debugger;
  //    //console.log(producto);

  //    let prod = JSON.stringify(producto);

  //    let cabecera = new HttpHeaders();
  //    cabecera.append('Content-Type', 'application/json');
  //    console.log(producto);



  //   //  prod[] = [nombre,precio]; 
  //    return this.http.post<producto>('https://localhost:44383/api/producto', prod, this.httpOptions)
  //  }
}
