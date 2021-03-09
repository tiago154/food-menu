import { Component, OnInit } from '@angular/core'

import { Router } from '@angular/router'
@Component({
  selector: 'app-establishment-crud',
  templateUrl: './establishment-crud.component.html',
  styleUrls: ['./establishment-crud.component.css']
})
export class EstablishmentCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToEstablishmentCreate(): void {
    this.router.navigate(['/establishments/create'])
  }
}
