import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarroDetailsComponent } from './carro-details/carro-details.component';
import { CreateCarroComponent } from './create-carro/create-carro.component';
import { CarroListComponent } from './carro-list/carro-list.component';

const routes: Routes = [
  { path: 'carros', component: CarroListComponent },
  { path: 'criar', component: CreateCarroComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
