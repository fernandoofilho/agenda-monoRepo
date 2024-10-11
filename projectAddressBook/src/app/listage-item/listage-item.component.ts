import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() contactDeleted = new EventEmitter<number>();

  photo= "https://as2.ftcdn.net/v2/jpg/02/15/84/43/1000_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
  constructor(private contactService: ContactService) {}

  deleteContact() {
    this.contactService.deleteContact(this.contact.id || 0).subscribe(() => {
      this.contactDeleted.emit(this.contact.id); 
    });
  } 
}
