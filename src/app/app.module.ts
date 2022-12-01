import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Filtro } from './personagens/filtro.pipe';
import { AppServiceService } from './app.service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonagensComponent } from './personagens/personagens.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonagensComponent,
    Filtro
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppServiceService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
