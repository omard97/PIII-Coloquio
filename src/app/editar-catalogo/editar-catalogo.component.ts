import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { producto } from '../model/producto';
import { BackenApiService } from '../services/backen-api.service';

@Component({
  selector: 'app-editar-catalogo',
  templateUrl: './editar-catalogo.component.html',
  styleUrls: ['./editar-catalogo.component.css'],
})
export class EditarCatalogoComponent implements OnInit {
  public formGroup: FormGroup = new FormGroup({
    Numero: new FormControl(''),
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

  ModificarP() {
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
  }
}
