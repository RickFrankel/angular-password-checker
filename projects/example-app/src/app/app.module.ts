import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordCheckerModule } from '@triangular/password-checker';
import { ExampleComponent } from './example.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestInterceptorShouldntInclude } from './test-interceptor-shouldnt-include';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordCheckerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TestInterceptorShouldntInclude, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
