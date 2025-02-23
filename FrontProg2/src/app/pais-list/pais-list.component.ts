import { PaisService } from './../pais.service';
import { Pais } from './../pais';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.scss']
})
export class PaisListComponent implements OnInit {
  paises: Pais[] = [];
  flag = false;
  constructor(private paisService: PaisService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.paisService.getPaises()
      .subscribe(res => {
        this.paises = res;
        console.log(this.paises);
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
      this.paisService.getPaisesFilters(pesquisa)
      .subscribe(res => {
        this.paises = res;
        console.log(this.paises);
      }, err => {
        console.log(err);
      });
    }
  }

}
