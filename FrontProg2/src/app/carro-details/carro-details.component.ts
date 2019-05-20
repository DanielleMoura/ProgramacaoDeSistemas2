import { Carro } from './../carro';
import { Component, OnInit, Input } from '@angular/core';
import { CarroService } from '../carro.service';
import { CarroListComponent } from '../carro-list/carro-list.component';


@Component({
  selector: 'app-carro-details',
  templateUrl: './carro-details.component.html',
  styleUrls: ['./carro-details.component.scss']
})
export class CarroDetailsComponent implements OnInit {

  @Input() carro: Carro;

  constructor(private carroService: CarroService, private listComponent: CarroListComponent) { }

  ngOnInit() {
  }

}
