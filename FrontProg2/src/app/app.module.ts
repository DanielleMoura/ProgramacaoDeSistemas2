import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarroListComponent } from './carro-list/carro-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CarroService } from './carro.service';
import { HeaderComponent } from './header/header.component';
import { CarroDetailsComponent } from './carro-details/carro-details.component';
import { CarroCreateComponent } from './carro-create/carro-create.component';
import { CarroEditComponent } from './carro-edit/carro-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CarroListComponent,
    HeaderComponent,
    CarroDetailsComponent,
    CarroCreateComponent,
    CarroEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [CarroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
