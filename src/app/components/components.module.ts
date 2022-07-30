import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosPaisComponent } from './datos-pais/datos-pais.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [DatosPaisComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDividerModule,
    MatChipsModule,
    MatGridListModule
  ],
  exports:[DatosPaisComponent]
})
export class ComponentsModule { }
