import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService, Contact } from '../contact.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-create-form',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  providers: [],

  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.css',
})
export class CreateFormComponent {
  nome: string = '';
  sobrenome: string = '';
  email: string = '';
  telefone: string = '';
  imageSrc: string | ArrayBuffer | null | undefined = null;
  isDragging: boolean = false;

  @Input() crt: boolean = false;
  @Output() crtChange = new EventEmitter<boolean>();
  @Output() contactCreated = new EventEmitter<void>();
  showCreate() {
    this.crt = !this.crt;
    this.crtChange.emit(this.crt); 
  }

  private dataURLtoFile(dataURL: string | ArrayBuffer, filename: string): File {
    const arr = (dataURL as string).split(',');
    const mimeMatch = arr[0].match(/:(.*?);/);
    if (!mimeMatch) {
      throw new Error('Formato de imagem inválido');
    }
    const mime = mimeMatch[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  constructor(private contactService: ContactService) {}

  submit() {
    const formData = new FormData();
    formData.append('name', this.nome);
    formData.append('email', this.email);
    formData.append('surname', this.sobrenome);
    formData.append('phone', this.telefone);

    if (this.imageSrc) {
      const file = this.dataURLtoFile(this.imageSrc, 'imagem.png');
      formData.append('image', file);
    }

    this.contactService.createContact(formData).subscribe(
      (response) => {
        this.contactCreated.emit(); 
        this.crt = false;
      },
      (error) => {
        console.error('Erro ao criar contato:', error);
      }
    );
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.previewImage(file);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;

    if (event.dataTransfer && event.dataTransfer.files) {
      const file = event.dataTransfer.files[0];
      this.previewImage(file);
    }
  }

  private previewImage(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageSrc = e.target?.result;
    };
    reader.readAsDataURL(file);
  }
}
