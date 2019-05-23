import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisService } from '../pais.service';
import { Pais } from '../pais';
import { FormBuilder, FormGroup, NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pais-create',
  templateUrl: './pais-create.component.html',
  styleUrls: ['./pais-create.component.scss']
})
export class PaisCreateComponent implements OnInit {
  pais: Pais;

  constructor(private formBuilder: FormBuilder, private paisService: PaisService, private router: Router) { }
  ngOnInit() {
    this.pais = new Pais();
  }

  createPais() {
    this.paisService.createPais(this.pais)
    .subscribe(res => {
        console.log(this.pais),
        this.router.navigate(['/paises']);
      }, (err) => {
        console.log(err);
      });
  }
}
