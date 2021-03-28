import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { HeaderService } from '../../template/header/header.service'
import { Establishment } from '../establishment.model'
import { EstablishmentService } from '../establishment.service'

@Component({
  selector: 'app-establishment-delete',
  templateUrl: './establishment-delete.component.html',
  styleUrls: ['./establishment-delete.component.css']
})
export class EstablishmentDeleteComponent implements OnInit {
  establishment: Establishment = {
    name: ''
  }

  constructor(
    private establishmentService: EstablishmentService,
    private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService
  ) {
    this.headerService.headerData = {
      title: 'Estabelecimentos > Exclusão estabelecimento',
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

  deleteEstablishment(): void {
    this.establishmentService.delete(this.establishment.id).subscribe(() => {
      this.establishmentService.showMessage('Estabelecimento excluído com sucesso!!')
      this.router.navigate(['/establishments'])
    })
  }

  cancel(): void {
    this.router.navigate(['/establishments'])
  }
}
