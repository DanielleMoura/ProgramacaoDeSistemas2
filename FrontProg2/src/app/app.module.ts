import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCarroComponent } from './create-carro/create-carro.component';
import { CarroDetailsComponent } from './carro-details/carro-details.component';
import { CarroListComponent } from './carro-list/carro-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CarroService } from './carro.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateCarroComponent,
    CarroDetailsComponent,
    CarroListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CarroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
