import { Component, OnInit } from '@angular/core';
import { Pais } from '../pais';
import { PaisService } from '../pais.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pais-edit',
  templateUrl: './pais-edit.component.html',
  styleUrls: ['./pais-edit.component.scss']
})
export class PaisEditComponent implements OnInit {
  pais: Pais;
  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private paisService: PaisService, private router: Router) { }

  ngOnInit() {
    this.getPaisDetails(this.route.snapshot.params.id);
  }

  getPaisDetails(id: number) {
    this.paisService.getPais(id)
    .subscribe(data => {
      this.pais = data;
      console.log(this.pais);
    });
  }

  updatePais() {
    this.paisService.updatePais(this.pais.id, this.pais)
    .subscribe(res => {
        console.log(this.pais),
        this.router.navigate(['/paises']);
      }, (err) => {
        console.log(err);
      });
  }
}
