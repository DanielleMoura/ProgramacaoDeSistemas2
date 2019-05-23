import { Observable } from 'rxjs';
import { CarroService } from './../carro.service';
import { Carro } from './../carro';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carro-list',
  templateUrl: './carro-list.component.html',
  styleUrls: ['./carro-list.component.scss']
})
export class CarroListComponent implements OnInit {
  carros: Carro[] = [];
  constructor(private carroService: CarroService, private router: Router) { }

  ngOnInit() {
    this.carroService.getCarros()
      .subscribe(res => {
        this.carros = res;
        console.log(this.carros);
      }, err => {
        console.log(err);
      });
  }
}
