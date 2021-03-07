import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './views/home/home.component'
import { EstablishmentCrudComponent } from './views/establishment-crud/establishment-crud.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'establishments',
    component: EstablishmentCrudComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
