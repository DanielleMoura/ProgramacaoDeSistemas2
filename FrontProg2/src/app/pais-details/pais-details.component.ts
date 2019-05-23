import { Component, OnInit } from '@angular/core';
import { Pais } from '../pais';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisService } from '../pais.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pais-details',
  templateUrl: './pais-details.component.html',
  styleUrls: ['./pais-details.component.scss']
})
export class PaisDetailsComponent implements OnInit {
  pais: Pais;
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

  deletePais(id: number) {
    this.paisService.deletePais(id)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/paises']);
        },
        error => console.log(error));
  }

  editPais(id: number) {
    this.router.navigate(['/pais-edit', id]);
  }
}

