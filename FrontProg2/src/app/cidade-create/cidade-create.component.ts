import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadeService } from '../cidade.service';
import { Cidade } from '../cidade';
import { FormBuilder, FormGroup, NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cidade-create',
  templateUrl: './cidade-create.component.html',
  styleUrls: ['./cidade-create.component.scss']
})
export class CidadeCreateComponent implements OnInit {
  cidade: Cidade;

  constructor(private formBuilder: FormBuilder, private cidadeService: CidadeService, private router: Router) { }
  ngOnInit() {
    this.cidade = new Cidade();
  }

  createCidade() {
    this.cidadeService.createCidade(this.cidade)
    .subscribe(res => {
        console.log(this.cidade),
        this.router.navigate(['/cidades']);
      }, (err) => {
        console.log(err);
      });
  }
}
