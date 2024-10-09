import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'https://sua-api.com/contacts'; // URL da sua API

  constructor(private http: HttpClient) { }

  // Método para buscar contatos
  getContacts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método para adicionar um novo contato
  addContact(contact: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.apiUrl, contact, { headers });
  }
}
