import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-projets',
  imports: [
    NgForOf
  ],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css'
})
export class ProjetsComponent implements OnInit{

  public projets =[
    {"nom" : "edumanage" , "image" : "/edu.jpg " ,"repostry" : "linkrepo" , "languag" : "java"},
    {"nom" : "constructionXpert" , "image" : "/construction.jpg " ,"repostry" : "https://github.com/Ouanda-amine/ConstructionXpert" ,"languag" : "java"},
    {"nom" : "meteo" , "image" : "/mte.jpg " ,"repostry" : "https://github.com/Ouanda-amine/Meteo" , "languag" : "js"},
    {"nom" : "Sportflow" , "image" : "/sport.jpg " ,"repostry" : "https://github.com/Ouanda-amine/SportFlow", "languag" : "java"},
    {"nom" : "movies" , "image" : "movie.jpg " ,"repostry" : "https://github.com/Ouanda-amine/Movies" , "languag" : "html"},
    {"nom" : "SmartRecruit" , "image" : "smart.jpg " ,"repostry" : "https://github.com/Ouanda-amine/SmartRecruit" , "languag" : "java"}

  ];

  constructor() {
  }
  ngOnInit(): void {
  }

}
