import { Component, OnInit } from '@angular/core';
import { Cidade } from '../cidade';
import { CidadeService } from '../cidade.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cidade-edit',
  templateUrl: './cidade-edit.component.html',
  styleUrls: ['./cidade-edit.component.scss']
})
export class CidadeEditComponent implements OnInit {
  cidade: Cidade;
  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private cidadeService: CidadeService, private router: Router) { }

  ngOnInit() {
    this.getCidadeDetails(this.route.snapshot.params.id);
  }

  getCidadeDetails(id: number) {
    this.cidadeService.getCidade(id)
    .subscribe(data => {
      this.cidade = data;
      console.log(this.cidade);
    });
  }

  updateCidade() {
    this.cidadeService.updateCidade(this.cidade.id, this.cidade)
    .subscribe(res => {
        console.log(this.cidade),
        this.router.navigate(['/cidades']);
      }, (err) => {
        console.log(err);
      });
  }
}
