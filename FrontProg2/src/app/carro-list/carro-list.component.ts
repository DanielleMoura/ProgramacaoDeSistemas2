import { Observable } from 'rxjs';
import { CarroService } from './../carro.service';
import { Carro } from './../carro';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carro-list',
  templateUrl: './carro-list.component.html',
  styleUrls: ['./carro-list.component.scss']
})
export class CarroListComponent implements OnInit {
  carros: Carro[];

  constructor(private carroService: CarroService) { }

  ngOnInit() {
    this.carroService.findAll().subscribe(data => {
      this.carros = data;
    });
  }


  deleteCarro(id: number) {
    this.carroService.deleteCarro(id)
      .subscribe(
        data => {
          console.log(data);
          this.ngOnInit();
        },
        error => console.log(error));
  }

}
