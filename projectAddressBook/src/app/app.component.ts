import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListageContainerComponent } from './listage-container/listage-container.component';
import { HeaderComponent } from './header/header.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Contact, ContactService } from './contact.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [ContactService],
  imports: [
    RouterOutlet,
    CommonModule,
    ListageContainerComponent,
    HeaderComponent,
    CreateFormComponent,
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projectAddressBook';
  crt: boolean = false;
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}
  
  showCreate() {
    this.crt = !this.crt;
  }
  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.getAllContacts().subscribe(
      (data) => {
        this.contacts = data.reverse();
      },
      (error) => {
        console.error('Erro ao carregar contatos:', error);
      }
    );
  }
}
