import { Routes } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {AboutComponent} from './about/about.component';

export const routes: Routes = [
  {path :"accueil" , component : AccueilComponent },
  {path : "about" , component : AboutComponent}
];
