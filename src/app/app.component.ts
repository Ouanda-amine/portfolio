import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, AccueilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App';
}
