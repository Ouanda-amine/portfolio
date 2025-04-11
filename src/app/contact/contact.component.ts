import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  nom : string = "";
  email : string="";
  message : string="";
  errorMessages: string = '';
  messageColor: string = 'text-danger';

  validation() : void{
    let error =[];
    if(!this.nom.trim()){
      error.push("champ requis")
    }

    if (!this.email.trim()) {
      error.push('Le champ Email est requis.');
    } else if (!this.isValidEmail(this.email)) {
      error.push('Veuillez entrer un email valide.');
    }

    if (!this.message.trim()){
      error.push("champ requis")

    }

    if (error.length > 0) {
      this.errorMessages = error.join('<br>');
      this.messageColor='text-danger'
    } else {
      this.errorMessages = 'Formulaire soumis avec succès !';
      this.messageColor = 'text-success';
      this.reset();
    }

  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  reset():void{
   this.nom='';
   this.email='';
   this.message='';

  }




}
