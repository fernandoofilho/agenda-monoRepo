import { Component, Input, OnInit } from '@angular/core';
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
  @Input() contacts: Contact[] = [];

  ngOnInit() {}

  removeContactFromList(contactId: number) {
    this.contacts = this.contacts.filter((contact) => contact.id !== contactId);
  }
}
