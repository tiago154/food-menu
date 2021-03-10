import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Establishment } from '../establishment.model'
import { EstablishmentService } from '../establishment.service'

@Component({
  selector: 'app-establishment-create',
  templateUrl: './establishment-create.component.html',
  styleUrls: ['./establishment-create.component.css']
})
export class EstablishmentCreateComponent implements OnInit {

  constructor(
    private establishmentService: EstablishmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createEstablishment(): void {
    const establishmentTest: Establishment = {
      name: 'Teste'
    }

    this.establishmentService.create(establishmentTest).subscribe(() => {
      this.establishmentService.showMessage('Operação executada')
      this.router.navigate(['/establishments'])
    })
  }

  cancel(): void {
    this.router.navigate(['/establishments'])
  }
}
