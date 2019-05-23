import { Component, OnInit } from '@angular/core';
import { Cidade } from '../cidade';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadeService } from '../cidade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cidade-details',
  templateUrl: './cidade-details.component.html',
  styleUrls: ['./cidade-details.component.scss']
})
export class CidadeDetailsComponent implements OnInit {
  cidade: Cidade;
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

  deleteCidade(id: number) {
    this.cidadeService.deleteCidade(id)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/cidades']);
        },
        error => console.log(error));
  }

  editCidade(id: number) {
    this.router.navigate(['/cidade-edit', id]);
  }
}

