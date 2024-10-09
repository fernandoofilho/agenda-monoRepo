import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListageItemComponent } from '../listage-item/listage-item.component';
@Component({
  selector: 'app-listage-container',
  standalone: true,
  imports: [ListageItemComponent, CommonModule],
  templateUrl: './listage-container.component.html',
  styleUrl: './listage-container.component.css',
})
export class ListageContainerComponent {
  mockData: {
    id: string;
    nome: string;
    imgPath: string;
    apelido: string;
    mail: string;
    telefone: string;
  }[] = [
    {
      id: '1',
      nome: 'Fernando',
      imgPath: 'images/1',
      apelido: 'fernando',
      mail: 'fernando@gmail.com',
      telefone: '92999293',
    },
    {
      id: '1',
      nome: 'Fernando',
      imgPath: 'images/1',
      apelido: 'fernando',
      mail: 'fernando@gmail.com',
      telefone: '92999293',
    },
    {
      id: '1',
      nome: 'Fernando',
      imgPath: 'images/1',
      apelido: 'fernando',
      mail: 'fernando@gmail.com',
      telefone: '92999293',
    },
    {
      id: '1',
      nome: 'Fernando',
      imgPath: 'images/1',
      apelido: 'fernando',
      mail: 'fernando@gmail.com',
      telefone: '92999293',
    },
  ];
}
