import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'

// models
import { ContriesApiResponse } from './models/contries.model';

// services
import { ContriesService } from './services/contries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contries';
  busqueda = '';
  losPaises!: ContriesApiResponse[];
  cargando = false;

  constructor(private contriesService: ContriesService, private _snackBar: MatSnackBar) { }

  onBuscarPais() {

    if(this.busqueda.trim().length === 0){
      this.showMessage('Por favor escriba un País');
      return;
    }

    this.losPaises = [];

    this.contriesService.obtener(this.busqueda).subscribe((exito: ContriesApiResponse[]) => {
      this.losPaises = exito;
    }, (err) => {
      this.busqueda = '';
      this.showMessage('EL PAIS NO EXISTE');
    });
  }

  onVerTodos() {
    this.losPaises = [];
    this.cargando = true;
    this.contriesService.obtenerTodos().subscribe((exito: ContriesApiResponse[]) => {
      this.cargando = false;
      this.losPaises = exito;
    }, (err) => {
      this.busqueda = '';
      this.cargando = false;
    });
  }

  showMessage(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${ message }`,
    })
  }

}
