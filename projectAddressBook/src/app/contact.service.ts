// contact.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contact {
  id?: number; 
  nome: string;
  name?: string;
  sobrenome: string;
  surname?: string;
  email: string;
  telefone: string;
  phone?: string;
  image?: any; 

}

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private apiUrl = 'http://localhost:5001/contacts';

  constructor(private http: HttpClient) {}

  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl);
  }

  createContact(contactData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, contactData);
  }

  updateContact(id: number, contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.apiUrl}/${id}`, contact);
  }

  deleteContact(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
