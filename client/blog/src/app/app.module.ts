import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './components/blog/blog-list/blog-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],//aca puede ir un servicio de autenticacion para verificar si el usuario esta logueado
  bootstrap: [AppComponent]//cuales van a ser los componentes que se van a llamar a la hora de iniciar la app
})
export class AppModule { }
