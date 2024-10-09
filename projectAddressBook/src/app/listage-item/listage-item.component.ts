import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listage-item',
  standalone: true,
  imports: [],
  templateUrl: './listage-item.component.html',
  styleUrl: './listage-item.component.css',
})
export class ListageItemComponent {
  @Input() id: string = '';
  @Input() nome: string = '';
  @Input() imgPath: string = '';
  @Input() apelido: string = '';
  @Input() mail: string = '';
  @Input() telefone: string = '';
}
