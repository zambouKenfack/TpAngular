import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-tableau',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatTabsModule, MatTableModule],
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent {
  // Données pour les maisons
  maisons: any[] = [];
  // Données pour les quartiers
  quartiers: any[] = [];
  // Données pour les catégories
  categories: any[] = [];

  // Données initiales pour les quartiers
  quartiersOptions = [
    { value: 'quartier1', viewValue: 'Quartier 1' },
    { value: 'quartier2', viewValue: 'Quartier 2' },
    { value: 'quartier3', viewValue: 'Quartier 3' }
  ];

  // Données initiales pour les catégories
  categoriesOptions = [
    { value: 'categorie1', viewValue: 'Catégorie 1' },
    { value: 'categorie2', viewValue: 'Catégorie 2' },
    { value: 'categorie3', viewValue: 'Catégorie 3' }
  ];

  // Méthode pour ajouter une maison
  addMaison(maison: any) {
    this.maisons.push(maison);
  }

  // Méthode pour supprimer une maison
  deleteMaison(index: number) {
    this.maisons.splice(index, 1);
  }

  // Méthode pour ajouter un quartier
  addQuartier(quartier: any) {
    this.quartiers.push(quartier);
  }

  // Méthode pour supprimer un quartier
  deleteQuartier(index: number) {
    this.quartiers.splice(index, 1);
  }

  // Méthode pour ajouter une catégorie
  addCategorie(categorie: any) {
    this.categories.push(categorie);
  }

  // Méthode pour supprimer une catégorie
  deleteCategorie(index: number) {
    this.categories.splice(index, 1);
  }

  // Méthode de déconnexion
  deconnexion() {
    // Ici vous pouvez ajouter la logique de déconnexion
    console.log('Déconnexion en cours...');
  }
}
