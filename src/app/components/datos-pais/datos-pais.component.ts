import { Component, Input, OnInit } from '@angular/core';
import { ContriesApiResponse } from 'src/app/models/contries.model';

@Component({
  selector: 'app-datos-pais',
  templateUrl: './datos-pais.component.html',
  styleUrls: ['./datos-pais.component.css']
})
export class DatosPaisComponent implements OnInit {

  @Input()
  resultadoPais!: ContriesApiResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
