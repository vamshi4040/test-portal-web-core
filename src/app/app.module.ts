import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ShowErrorsComponent } from './validators/show-errors.component';

import { TelephoneNumberFormatValidatorDirective } from './validators/telephone-number-format-validator.directive';
import { TelephoneNumbersValidatorDirective } from './validators/telephone-numbers-validator.directive';
import { UniqueNameValidatorDirective } from './validators/name-unique-validator.directive';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShowErrorsComponent,
    TelephoneNumberFormatValidatorDirective,
    TelephoneNumbersValidatorDirective,
    UniqueNameValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
