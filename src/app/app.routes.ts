import { Routes } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {AboutComponent} from './about/about.component';
import {ProjetsComponent} from './projets/projets.component';

export const routes: Routes = [
  {path :"accueil" , component : AccueilComponent },
  {path : "about" , component : AboutComponent},
  {path : "projets" , component : ProjetsComponent}
];
