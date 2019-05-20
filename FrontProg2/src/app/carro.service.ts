import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carro } from './carro';
@Injectable({
  providedIn: 'root'
})

export class CarroService {
  private carrosUrl: string;

  constructor(private http: HttpClient) {
    this.carrosUrl = 'http://localhost:8080/api/carros';
  }

  public findAll(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.carrosUrl);
  }

  createCarro(carro: Carro) {
    return this.http.post(`${this.carrosUrl}`, carro);
  }

  updateCarro(id: number, value: any) {
    return this.http.put(`${this.carrosUrl}/${id}`, value);
  }

  deleteCarro(id: number) {
    return this.http.delete(`${this.carrosUrl}/${id}`, { responseType: 'text' });
  }
}
