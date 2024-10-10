import { Component, Input, ViewContainerRef } from '@angular/core';
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
  showContact: Boolean = true;

  constructor(private contactService: ContactService) {}

  handleDisable(){
    this.showContact = false
  }


  deleteContact(){
    const id = this.contact.id
    if (id){
      this.contactService.deleteContact(+id).subscribe(
        this.handleDisable
      )
    }
  }
}
