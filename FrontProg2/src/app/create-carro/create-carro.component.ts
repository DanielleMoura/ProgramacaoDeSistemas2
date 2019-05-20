import { CarroService } from './../carro.service';
import { Carro } from './../carro';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-carro',
  templateUrl: './create-carro.component.html',
  styleUrls: ['./create-carro.component.scss']
})
export class CreateCarroComponent {

  carro: Carro;

  constructor(private route: ActivatedRoute, private router: Router, private carroService: CarroService) {
    this.carro = new Carro();
  }

  onSubmit() {
    this.carroService.createCarro(this.carro).subscribe(result => this.gotoCarroList());
  }

  gotoCarroList() {
    this.router.navigate(['/carros']);
  }
}

