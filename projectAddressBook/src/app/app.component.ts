import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListageContainerComponent } from './listage-container/listage-container.component';
import { HeaderComponent } from './header/header.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './contact.service';

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
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projectAddressBook';
}
