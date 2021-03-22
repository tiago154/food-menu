import { Component, OnInit } from '@angular/core'
import { Establishment } from '../establishment.model'
import { EstablishmentService } from '../establishment.service'

@Component({
  selector: 'app-establishment-read',
  templateUrl: './establishment-read.component.html',
  styleUrls: ['./establishment-read.component.css']
})
export class EstablishmentReadComponent implements OnInit {

  establishments: Establishment[]

  displayedColumns: string[] = ['id', 'name']

  constructor(private establishmentService: EstablishmentService) { }

  ngOnInit(): void {
    this.establishmentService.read().subscribe(establishments => {
      this.establishments = establishments
    })
  }
}
