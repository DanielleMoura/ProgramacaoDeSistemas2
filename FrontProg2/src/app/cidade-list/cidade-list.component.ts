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

}
