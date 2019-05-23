import { PaisService } from './../pais.service';
import { Pais } from './../pais';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.scss']
})
export class PaisListComponent implements OnInit {
  paises: Pais[] = [];
  constructor(private paisService: PaisService, private router: Router) { }

  ngOnInit() {
    this.paisService.getPaises()
      .subscribe(res => {
        this.paises = res;
        console.log(this.paises);
      }, err => {
        console.log(err);
      });
  }

}
