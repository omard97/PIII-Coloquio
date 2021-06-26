import { Component, OnInit } from '@angular/core';
import { producto } from '../model/producto';
import { BackenApiService } from '../services/backen-api.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  producto:producto[] =[]
  constructor(private service:BackenApiService) { 
    this.service.getproductos().subscribe(info=>{ console.log(info)
    
       this.producto=info;
    },error=>{console.log(error)})
  }

  ngOnInit(): void {
  }

}
