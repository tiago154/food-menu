import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { HeaderService } from '../../template/header/header.service'
import { Establishment } from '../establishment.model'
import { EstablishmentService } from '../establishment.service'

@Component({
  selector: 'app-establishment-update',
  templateUrl: './establishment-update.component.html',
  styleUrls: ['./establishment-update.component.css']
})
export class EstablishmentUpdateComponent implements OnInit {
  establishment: Establishment

  constructor(
    private establishmentService: EstablishmentService,
    private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService
  ) {
    this.headerService.headerData = {
      title: 'Estabelecimentos > Alterar estabelecimento',
      icon: 'restaurant_menu',
      routeUrl: '/establishments'
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.establishmentService.readById(id).subscribe(establishment => {
      this.establishment = establishment
    })
  }

  updateEstablishment(): void {
    this.establishmentService.update(this.establishment).subscribe(() => {
      this.establishmentService.showMessage('Estabelecimento atualizado com sucesso!!')
      this.router.navigate(['/establishments'])
    })
  }

  cancel(): void {
    this.router.navigate(['/establishments'])
  }

}
