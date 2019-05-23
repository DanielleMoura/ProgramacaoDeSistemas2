import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarroListComponent } from './carro-list/carro-list.component';
import { CarroDetailsComponent } from './carro-details/carro-details.component';
import { CarroCreateComponent } from './carro-create/carro-create.component';
import { CarroEditComponent } from './carro-edit/carro-edit.component';
import { CidadeListComponent } from './cidade-list/cidade-list.component';
import { CidadeDetailsComponent } from './cidade-details/cidade-details.component';
import { CidadeCreateComponent } from './cidade-create/cidade-create.component';
import { CidadeEditComponent } from './cidade-edit/cidade-edit.component';

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
  },
  { path: 'cidades',
    component: CidadeListComponent,
    data: { title: 'Listagem de Cidades' }
  },
  { path: 'cidade-details/:id',
    component: CidadeDetailsComponent,
    data: { title: 'Detalhes da Cidade' }
  },
  { path: 'cidade-create',
    component: CidadeCreateComponent,
    data: { title: 'Criação de Cidade' }
  },
  { path: 'cidade-edit/:id',
    component: CidadeEditComponent,
    data: { title: 'Edição da Cidade' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
