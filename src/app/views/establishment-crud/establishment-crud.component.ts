import { Component, OnInit } from '@angular/core'

import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/template/header/header.service'
@Component({
  selector: 'app-establishment-crud',
  templateUrl: './establishment-crud.component.html',
  styleUrls: ['./establishment-crud.component.css']
})
export class EstablishmentCrudComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService
  ) {
    this.headerService.headerData = {
      title: 'Estabelecimentos',
      icon: 'restaurant_menu',
      routeUrl: '/establishments'
    }
  }

  ngOnInit(): void {
  }

  navigateToEstablishmentCreate(): void {
    this.router.navigate(['/establishments/create'])
  }
}
