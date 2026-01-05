import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.submitted = true;
    
    // Reset form after 3 seconds
    setTimeout(() => {
      this.submitted = false;
      this.formData = {
        name: '',
        email: '',
        phone: '',
        message: ''
      };
    }, 3000);
  }
}
