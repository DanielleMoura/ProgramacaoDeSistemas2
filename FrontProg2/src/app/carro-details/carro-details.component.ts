import { Component, OnInit } from '@angular/core';
import { Carro } from '../carro';
import { ActivatedRoute, Router } from '@angular/router';
import { CarroService } from '../carro.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carro-details',
  templateUrl: './carro-details.component.html',
  styleUrls: ['./carro-details.component.scss']
})
export class CarroDetailsComponent implements OnInit {
  carro: Carro;
  constructor(private route: ActivatedRoute, private carroService: CarroService, private router: Router) { }

  ngOnInit() {
    this.getCarroDetails(this.route.snapshot.params.id);
  }

  getCarroDetails(id: number) {
    this.carroService.getCarro(id)
    .subscribe(data => {
      this.carro = data;
      console.log(this.carro);
    });
  }

  deleteCarro(id: number) {
    this.carroService.deleteCarro(id)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/carros']);
        },
        error => console.log(error));
  }

  editCarro(id: number) {
    this.router.navigate(['/carro-edit', id]);
  }
}
