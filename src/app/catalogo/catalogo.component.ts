import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { producto } from '../model/producto';
import { BackenApiService } from '../services/backen-api.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  public formGroup: FormGroup = new FormGroup({
    nombreP: new FormControl(''),
    precio: new FormControl(''),
  });
  producto: any;

  proA: producto[] = [];

  constructor(public service: BackenApiService) {
    this.service.getproductos().subscribe(
      (info) => {
        console.log(info);

        this.producto = info;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit(): void {}

  guardarP() {
    //debugger;
    var prod = {
      Nombre: this.formGroup.value.nombreP,
      Precio: this.formGroup.value.precio+"",
    };
    this.service.crearProd(prod).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  /* ModificarP() {
    console.log('modificando');
    debugger;
    var modP: producto = {
      idProducto: this.formGroup.value.Numero,
      nombre: this.formGroup.value.nombreP,
      precio: this.formGroup.value.precio,
    };
    this.service.editprod(modP).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  } */
}

// guardarProducto(){
//   console.log("hola hoa hoasflaksfkaf");
//   var prod:producto={
//     nombre:this.formGroup.value.nombreP,
//     precio:this.formGroup.value.precio

//   }
//   debugger

// this.service.Postproducto(prod).subscribe(data=>{
//   console.log(data)
//   },error=>{console.error(error)}

// );
//}
//}
