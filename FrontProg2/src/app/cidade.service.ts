import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cidade } from './cidade';

@Injectable({
  providedIn: 'root'
})

export class CidadeService {
  private cidade: Cidade;
  private cidadesUrl = 'http://localhost:8080/api/cidades';

  constructor(private http: HttpClient) { }

  getCidades(): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(this.cidadesUrl);
  }

  getCidade(id: number): Observable<Cidade> {
    return this.http.get<Cidade>(`${this.cidadesUrl}/${id}`);
  }

  createCidade(cidade): Observable<Cidade> {
    return this.http.post<Cidade>(this.cidadesUrl, cidade);
  }

  updateCidade(id: number, cidade): Observable<any> {
    return this.http.put(`${this.cidadesUrl}/${id}`, cidade);
  }

  deleteCidade(id: number): Observable<Cidade> {
    return this.http.delete<Cidade>(`${this.cidadesUrl}/${id}`, { responseType: 'json' });
  }
}
