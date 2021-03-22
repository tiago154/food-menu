import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Establishment } from './establishment.model'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  // Procurar forma melhor de carregar as variaveis de ambiente
  private baseUrl = environment.foodApiHost

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(message: string): void {
    this.snackBar.open(
      message,
      'Close',
      {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      }
    )
  }

  create(establishment: Establishment): Observable<Establishment> {
    return this.http.post<Establishment>(`${this.baseUrl}/establishments`, establishment)
  }

  read(): Observable<Establishment[]> {
    return this.http.get<Establishment[]>(`${this.baseUrl}/establishments`)
  }
}
