import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carro } from './carro';

@Injectable({
  providedIn: 'root'
})

export class CarroService {
  private carro: Carro;
  private carrosUrl = 'http://localhost:8080/api/carros';

  constructor(private http: HttpClient) {
  }

  getCarros(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.carrosUrl);
  }

  getCarrosFilters(filters): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.carrosUrl + '/filter/modelo/' + filters);
  }

  getCarro(id: number): Observable<Carro> {
    return this.http.get<Carro>(`${this.carrosUrl}/${id}`);
  }

  createCarro(carro): Observable<Carro> {
    return this.http.post<Carro>(this.carrosUrl, carro);
  }

  updateCarro(id: number, carro): Observable<any> {
    return this.http.put(`${this.carrosUrl}/${id}`, carro);
  }

  deleteCarro(id: number): Observable<Carro> {
    return this.http.delete<Carro>(`${this.carrosUrl}/${id}`, { responseType: 'json' });
  }
}
