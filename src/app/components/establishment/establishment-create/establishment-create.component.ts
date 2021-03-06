import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { HeaderService } from '../../template/header/header.service'
import { Establishment } from '../establishment.model'
import { EstablishmentService } from '../establishment.service'

@Component({
  selector: 'app-establishment-create',
  templateUrl: './establishment-create.component.html',
  styleUrls: ['./establishment-create.component.css']
})
export class EstablishmentCreateComponent implements OnInit {

  establishment: Establishment = {
    name: ''
  }

  constructor(
    private establishmentService: EstablishmentService,
    private router: Router,
    private headerService: HeaderService
  ) {
    this.headerService.headerData = {
      title: 'Estabelecimentos > Novo estabelecimento',
      icon: 'restaurant_menu',
      routeUrl: '/establishments'
    }
  }

  ngOnInit(): void {
  }

  createEstablishment(): void {
    this.establishmentService.create(this.establishment).subscribe(() => {
      this.establishmentService.showMessage('Operação executada')
      this.router.navigate(['/establishments'])
    })
  }

  cancel(): void {
    this.router.navigate(['/establishments'])
  }
}
