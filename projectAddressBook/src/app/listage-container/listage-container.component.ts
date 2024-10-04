import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListageItemComponent } from '../listage-item/listage-item.component';
@Component({
  selector: 'app-listage-container',
  standalone: true,
  imports: [ListageItemComponent],
  templateUrl: './listage-container.component.html',
  styleUrl: './listage-container.component.css'
})
export class ListageContainerComponent {

}
