import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  onSubmit() {
    // Simuler l'authentification réussie
    this.router.navigate(['/tableau']);
  }

  // Méthode pour la redirection directe
  goToTableau() {
    this.router.navigate(['/tableau']);
  }
}
