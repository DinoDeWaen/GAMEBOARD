import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { NglModule } from 'ng-lightning/ng-lightning';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule,  
         AuthMethods, 
         AuthProviders  } from 'angularfire2';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { GamesComponent } from './games/games/games.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';

import { UserService } from './user/services/user.service';


// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyDmdH3T0_6BUhWI63FUAXCPe90yZFLPdio",
    authDomain: "gameweekend-874b4.firebaseapp.com",
    databaseURL: "https://gameweekend-874b4.firebaseio.com",
    storageBucket: "gameweekend-874b4.appspot.com",
    messagingSenderId: "1046121003920"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routedComponents,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NglModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
