import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact, ContactService } from '../contact.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-listage-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listage-item.component.html',
  styleUrls: ['./listage-item.component.css'],
})
export class ListageItemComponent {
  @Input() contact!: Contact;
  @Output() contactDeleted = new EventEmitter<number>();
  @Output() contactFavorited = new EventEmitter<void>();
  
  photo= `http://localhost:5001/uploads/${this.contact?.image}`
  constructor(private contactService: ContactService) {}


  handleClick() {
      this.contact.favorite = !this.contact.favorite;
      this.contactService.favoriteContact(this.contact?.id || 0).subscribe(()=> 
      {
        this.contactFavorited.emit();
      })
  }

  deleteContact() {
    this.contactService.deleteContact(this.contact.id || 0).subscribe(() => {
      this.contactDeleted.emit(this.contact.id); 
    });

  } 
}
