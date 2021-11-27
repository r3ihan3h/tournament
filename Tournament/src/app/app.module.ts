import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Firebase config
import { AngularFireModule } from 'angularfire2';
import {AngularFirebaseModule} from 'angularfire2/database'
import { environment } from '../environments/environment';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { BasePageComponent } from './partials/base-page/base-page.component';

import { TournamentModule } from './tournament-list/tournament-list.module';
import { AddTournamentComponent } from './pages/add-tournament/add-tournament.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditTournamentComponent } from './pages/edit-tournament/edit-tournament.component';

import { AuthComponent } from './admin/auth/auth.component';
import { RegisterComponent } from './admin/register/register.component';

import { JwtModule, JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';

//Firebase export
export const firebaseConfig={
  
    apiKey: "AIzaSyArwkg_3Qhdj76GODRD-CT7mpZnOIaCjQY",
    authDomain: "tournament-a4480.firebaseapp.com",
    databaseURL: "https://tournament-a4480-default-rtdb.firebaseio.com",
    projectId: "tournament-a4480",
    storageBucket: "tournament-a4480.appspot.com",
    messagingSenderId: "501650314805",
    appId: "1:501650314805:web:c48e08a0d1e9aad105037c"
}


export function jwtTokenGetter(): string
{
  return localStorage.getItem('id_token') || '';
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    ServicesComponent,
    BasePageComponent,
    AddTournamentComponent,
    EditTournamentComponent,
    AuthComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig), //firebase
    AngularFireModule,  //firebase
    AngularFirebaseModule,  //firebase
    AppRoutingModule,
    TournamentModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
