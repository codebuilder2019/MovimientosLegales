import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LegalMovementsAccessService {
  dataURL = 'https://api-dev.vigpro.com/api/actuaciones-prueba';

  constructor(private http: HttpClient) { }

  getLegalMovements() : Observable<any> {
    // Obtener los registros de movimientos desde la API
    return this.http.post(this.dataURL, {});

    // Datos dummy para pruebas
    /*
    const tmp =  [
      {"idMov": 0, "fechaCreacion": "2011-10-10", "detalle": "detalle1"},
      {"idMov": 1, "fechaCreacion": "2011-10-12", "detalle": "detalle2"},
      {"idMov": 2, "fechaCreacion": "2011-10-11", "detalle": "detalle3"},
      {"idMov": 3, "fechaCreacion": "2011-10-16", "detalle": "detalle1"},
      {"idMov": 4, "fechaCreacion": "2011-10-10", "detalle": "detalle2"},
      {"idMov": 5, "fechaCreacion": "2011-10-17", "detalle": "detalle3"},
      {"idMov": 6, "fechaCreacion": "2011-10-10", "detalle": "detalle1"},
      {"idMov": 7, "fechaCreacion": "2011-10-19", "detalle": "detalle2"},
      {"idMov": 8, "fechaCreacion": "2011-10-10", "detalle": "detalle3"},
      {"idMov": 9, "fechaCreacion": "2011-10-10", "detalle": "detalle1"},
      {"idMov": 10, "fechaCreacion": "2011-10-20", "detalle": "detalle2"},
      {"idMov": 11, "fechaCreacion": "2011-10-10", "detalle": "detalle3"},
      {"idMov": 12, "fechaCreacion": "2011-10-10", "detalle": "detalle1"},
      {"idMov": 13, "fechaCreacion": "2011-10-20", "detalle": "detalle2"},
      {"idMov": 14, "fechaCreacion": "2011-10-10", "detalle": "detalle3"},
      {"idMov": 15, "fechaCreacion": "2011-10-06", "detalle": "detalle1"},
      {"idMov": 16, "fechaCreacion": "2011-10-15", "detalle": "detalle2"},
      {"idMov": 17, "fechaCreacion": "2011-10-10", "detalle": "detalle3"},
      {"idMov": 18, "fechaCreacion": "2011-10-14", "detalle": "detalle1"},
      {"idMov": 19, "fechaCreacion": "2011-10-10", "detalle": "detalle2"},
      {"idMov": 20, "fechaCreacion": "2011-10-10", "detalle": "detalle3"}
    ];

    const legalMovements ={"data": tmp};

    const obsUsingConstructor = new Observable( observer => {
      observer.next( legalMovements )
      observer.complete()
    });
    return obsUsingConstructor;
    */
  }
}
