import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarroService } from '../carro.service';
import { Carro } from '../carro';
import { FormBuilder, FormGroup, NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-carro-create',
  templateUrl: './carro-create.component.html',
  styleUrls: ['./carro-create.component.scss']
})
export class CarroCreateComponent implements OnInit {
  carro: Carro;

  constructor(private formBuilder: FormBuilder, private carroService: CarroService, private router: Router) { }
  ngOnInit() {
    this.carro = new Carro();
  }

  createCarro() {
    this.carroService.createCarro(this.carro)
    .subscribe(res => {
        console.log(this.carro),
        this.router.navigate(['/carros']);
      }, (err) => {
        console.log(err);
      });
  }
}
