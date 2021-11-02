import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//va a ser la forma como nuestro componente va a ser llamado dentro del modulo,
  //en este caso el app-root es requerido en la pagina HTML
  templateUrl: './app.component.html',//cual va a ser el url de nuestro html
  styleUrls: ['./app.component.scss']// en este defiene cual va a ser la hoja de estilos del componente
})
export class AppComponent {// en esta clase ira la logica
  title = 'TicoAirlines';
  elements = ['hola', 'mundo', 'que', 'tal', 'como', 'estas'];
}
