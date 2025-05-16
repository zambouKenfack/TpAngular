import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from '../app/login/login.component';
import {TableauComponent} from '../app/tableau/tableau.component';
import {QuatiersComponent} from '../app/quatiers/quatiers.component';
import {Formulaire1Component} from '../app/formulaire1/formulaire1.component';
import {MaisonsComponent} from '../app/maisons/maisons.component';
import {Formulaire2Component} from '../app/formulaire2/formulaire2.component';
import {CategoriesComponent} from '../app/categories/categories.component';
import {Formulaire3Component} from '../app/formulaire3/formulaire3.component';
import {SupressionComponent} from '../app/supression/supression.component';
import {Supression1Component} from '../app/supression1/supression1.component';
import {Supression2Component} from '../app/supression2/supression2.component';
import {Etapes1Component} from '../app/etapes1/etapes1.component';
import {Etapes2Component} from '../app/etapes2/etapes2.component';
import {Etapes3Component} from '../app/etapes3/etapes3.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent , TableauComponent , QuatiersComponent , Formulaire1Component , MaisonsComponent ,Formulaire2Component ,CategoriesComponent , Formulaire3Component , SupressionComponent ,Supression1Component,Supression2Component,Etapes1Component ,Etapes2Component,Etapes3Component , RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Projet_Angular';
}
