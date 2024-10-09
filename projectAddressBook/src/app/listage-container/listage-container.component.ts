import { Component, OnInit } from '@angular/core';
import { ContactService, Contact } from '../contact.service'; // Ajuste o caminho se necessário
import { CommonModule } from '@angular/common';
import { ListageItemComponent } from '../listage-item/listage-item.component';

@Component({
  selector: 'app-listage-container',
  standalone: true,
  imports: [ListageItemComponent, CommonModule],
  templateUrl: './listage-container.component.html',
  styleUrls: ['./listage-container.component.css'],
})
export class ListageContainerComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.getAllContacts().subscribe(
      (data) => {
        this.contacts = data; 
      },
      (error) => {
        console.error('Erro ao carregar contatos:', error);
      }
    );
  }
}
