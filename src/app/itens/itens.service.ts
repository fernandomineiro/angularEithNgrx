import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Itens } from './store/itens';

@Injectable({
  providedIn: 'root',
})
export class ItensService {
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<Itens[]>('http://localhost:3000/itens');
  }

  create(payload: Itens) {
    return this.http.post<Itens>('http://localhost:3000/itens', payload);
  }

  update(payload: Itens) {
    return this.http.put<Itens>(
      `http://localhost:3000/itens/${payload.id}`,
      payload
    );
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:3000/itens/${id}`);
  }
}
