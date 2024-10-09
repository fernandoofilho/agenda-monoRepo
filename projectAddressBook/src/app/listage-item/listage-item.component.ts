import { Component, Input } from '@angular/core';
import { Contact } from '../contact.service'; 

@Component({
  selector: 'app-listage-item',
  standalone: true,
  imports: [],
  templateUrl: './listage-item.component.html',
  styleUrls: ['./listage-item.component.css'], 
})
export class ListageItemComponent {
  @Input() contact!: Contact;

    constructor() {}

}
