import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './components/blog/blog-list/blog-list.component';
import { LoginComponent } from './components/login/login/login.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { RegisterComponent } from './components/register/register/register.component';

import { authInterceptorProviders } from './helpers/user.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [authInterceptorProviders],//aca puede ir un servicio de autenticacion para verificar si el usuario esta logueado
  bootstrap: [AppComponent]//cuales van a ser los componentes que se van a llamar a la hora de iniciar la app
})
export class AppModule { }
