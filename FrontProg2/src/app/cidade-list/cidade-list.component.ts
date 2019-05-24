import { Observable } from 'rxjs';
import { CidadeService } from './../cidade.service';
import { Cidade } from './../cidade';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cidade-list',
  templateUrl: './cidade-list.component.html',
  styleUrls: ['./cidade-list.component.scss']
})
export class CidadeListComponent implements OnInit {
  cidades: Cidade[] = [];
  flag = false;
  constructor(private cidadeService: CidadeService, private router: Router) { }

  ngOnInit() {
    this.cidadeService.getCidades()
      .subscribe(res => {
        this.cidades = res;
        console.log(this.cidades);
      }, err => {
        console.log(err);
      });
  }

  voltar() {
    this.flag = false;
    this.ngOnInit();
  }

  searchFilter(pesquisa) {
    if (pesquisa == null) {
      this.ngOnInit();
    } else {
      this.flag = true;
      this.cidadeService.getCidadesFilters(pesquisa)
      .subscribe(res => {
        this.cidades = res;
        console.log(this.cidades);
      }, err => {
        console.log(err);
      });
    }
  }

}
