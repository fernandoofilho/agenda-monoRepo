import { Component, Input } from '@angular/core';
import { Contact, ContactService } from '../contact.service'; 

@Component({
  selector: 'app-listage-item',
  standalone: true,
  imports: [],
  templateUrl: './listage-item.component.html',
  styleUrls: ['./listage-item.component.css'], 
})
export class ListageItemComponent {
  @Input() contact!: Contact;

  constructor(private contactService: ContactService) {}

  // deleteContact() {
  //   this.contactService.deleteContact(this.contact.id).subscribe(
  //     response => {
  //       console.log('Contato deletado:', response);
  //     },
  //     error => {
  //       console.error('Erro ao deletar contato:', error);
  //     }
  //   );
  // }
}
