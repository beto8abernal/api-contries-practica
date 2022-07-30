import { Injectable } from '@angular/core';
import { map } from 'rxjs';

// models
import { ContriesApiResponse } from '../models/contries.model';

// services
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class ContriesService {

  constructor(private generalService: GeneralService) { }

  obtener(elPais: string) {
    return this.generalService.getQuery<ContriesApiResponse[]>(`name/${elPais}`).pipe(
      map((LasContries: ContriesApiResponse[]) => LasContries
      )
    );
  }

  obtenerTodos() {
    return this.generalService.getQuery<ContriesApiResponse[]>(`all`).pipe(
      map((LasContries: ContriesApiResponse[]) => LasContries
      )
    );
  }

}
