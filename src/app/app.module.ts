import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalModule } from './components/principal/principal.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PrincipalComponent } from './components/principal/principal.component';

// Environment
import { environment } from 'src/environments/environment';

// Angular Fire
import { AngularFireModule } from '@angular/fire';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// Angular Material
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrincipalModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NoopAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
