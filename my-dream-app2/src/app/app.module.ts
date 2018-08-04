import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { LoggingService } from './logging.service';
import { UserService } from './user/user.service';
import { HighlightDirective } from './directives/highlight.directive';
import { EmailComponent } from './user/email/email.component';
import { PasswordComponent } from './user/password/password.component';
import { NameComponent } from './user/name/name.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    WelcomeComponent,
    HighlightDirective,
    EmailComponent,
    PasswordComponent,
    NameComponent,
    NavbarComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LoggingService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
