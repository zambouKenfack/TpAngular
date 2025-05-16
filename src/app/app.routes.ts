import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
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

export const routes: Routes = [
    {path:'', component: LoginComponent},
    {path:'connexion', component: TableauComponent},
    {path:'gererMaison', component: MaisonsComponent },
    {path:'creerMaison', component: Formulaire2Component},
    {path:'gererQuatier', component: QuatiersComponent},
    {path:'creerquatier', component: Formulaire1Component},
    {path:'gererCategories', component: CategoriesComponent},
    {path:'creerCategorie', component: Formulaire3Component},
    {path:'deconnexion', component: LoginComponent},
    {path:'supprimerQuatier', component: Supression1Component},
    {path:'supprimerMaison', component: SupressionComponent},
    {path:'supprimerCategorie', component: Supression2Component},
    {path:'creercompte', component: Etapes1Component},
    {path:'suivant', component: Etapes2Component},
    {path:'suivant1', component: Etapes3Component},
    {path:'suivant3', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}