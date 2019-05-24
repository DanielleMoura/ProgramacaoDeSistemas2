import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Pais } from './pais';

@Injectable({
  providedIn: 'root'
})

export class PaisService {
  private pais: Pais;
  private paisesUrl = 'http://localhost:8080/api/paises';

  constructor(private http: HttpClient) { }

  getPaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.paisesUrl);
  }

  getPaisesFilters(filters): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.paisesUrl + '/filter/continente/' + filters);
  }

  getPais(id: number): Observable<Pais> {
    return this.http.get<Pais>(`${this.paisesUrl}/${id}`);
  }

  createPais(pais): Observable<Pais> {
    return this.http.post<Pais>(this.paisesUrl, pais);
  }

  updatePais(id: number, pais): Observable<any> {
    return this.http.put(`${this.paisesUrl}/${id}`, pais);
  }

  deletePais(id: number): Observable<Pais> {
    return this.http.delete<Pais>(`${this.paisesUrl}/${id}`, { responseType: 'json' });
  }
}
