import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// globals
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(public myServicio: HttpClient) { }

  getQuery<T>(query: string) {
    const url = `${environment.endPointApi}/${query}`;
    return this.myServicio.get<T>(url);
  }

  post(query: string, body: any) {
    const url = `${environment.endPointApi}/${query}`;
    return this.myServicio.post(url, body);
  }

  Put(query: string, body: any) {
    const url = `${environment.endPointApi}/${query}`;
    return this.myServicio.put(url, body);
  }

  Delete(query: string) {
    const url = `${environment.endPointApi}/${query}`;
    return this.myServicio.delete(url);
  }

}
