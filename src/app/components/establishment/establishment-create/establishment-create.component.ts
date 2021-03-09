import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
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
    this.establishmentService.showMessage('Operação executada')
  }

  cancel(): void {
    this.router.navigate(['/establishments'])
  }
}
