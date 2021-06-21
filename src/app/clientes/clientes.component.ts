import { Component, OnInit } from '@angular/core';
import { cliente } from '../model/cliente'; /* importacion del metodo/clase */
import { BackenApiService } from '../services/backen-api.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes:cliente[] = [] 

  constructor( private service:BackenApiService) {

    this.service.getclientes().subscribe(data=>{console.log(data) 

      this.clientes = data;

    
    }, error=>{console.log(error)})

   }

  ngOnInit(): void {
  }

}
