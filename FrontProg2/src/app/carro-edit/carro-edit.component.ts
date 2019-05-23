import { Component, OnInit } from '@angular/core';
import { Carro } from '../carro';
import { CarroService } from '../carro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CarroDetailsComponent } from '../carro-details/carro-details.component';

@Component({
  selector: 'app-carro-edit',
  templateUrl: './carro-edit.component.html',
  styleUrls: ['./carro-edit.component.scss']
})
export class CarroEditComponent implements OnInit {
  carro: Carro;
  // tslint:disable-next-line:max-line-length
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

  updateCarro() {
    this.carroService.updateCarro(this.carro.id, this.carro)
    .subscribe(res => {
        console.log(this.carro),
        this.router.navigate(['/carros']);
      }, (err) => {
        console.log(err);
      });
  }
}
