import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarroListComponent } from './carro-list/carro-list.component';
import { CarroDetailsComponent } from './carro-details/carro-details.component';
import { CarroCreateComponent } from './carro-create/carro-create.component';
import { CarroEditComponent } from './carro-edit/carro-edit.component';

const routes: Routes = [
  { path: 'carros',
    component: CarroListComponent,
    data: { title: 'Listagem de Carros' }
  },
  { path: 'carro-details/:id',
    component: CarroDetailsComponent,
    data: { title: 'Detalhes do Carro' }
  },
  { path: 'carro-create',
    component: CarroCreateComponent,
    data: { title: 'Criação do Carro' }
  },
  { path: 'carro-edit/:id',
    component: CarroEditComponent,
    data: { title: 'Edição do Carro' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
