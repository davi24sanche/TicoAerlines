import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',//va a ser la forma como nuestro componente va a ser llamado dentro del modulo,
  //en este caso el app-root es requerido en la pagina HTML
  templateUrl: './app.component.html',//cual va a ser el url de nuestro html
  styleUrls: ['./app.css']// en este defiene cual va a ser la hoja de estilos del componente
})
export class AppComponent {// en esta clase ira la logica
  title = 'TicoAirlines';
  elements = ['hola', 'mundo', 'que', 'tal', 'como', 'estas'];

  //Atributos para la autenticación 
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
