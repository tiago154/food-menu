import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http'
import { EMPTY, Observable } from 'rxjs'
import { Establishment } from './establishment.model'
import { environment } from 'src/environments/environment'
import { map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  // Procurar forma melhor de carregar as variaveis de ambiente
  private baseUrl = `${environment.foodApiHost}/establishments`

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(message: string, isError: boolean = false): void {
    this.snackBar.open(
      message,
      isError ? 'Tente Denovo' : 'OK',
      {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: isError ? ['msg-error'] : ['msg-success']
      }
    )
  }

  create(establishment: Establishment): Observable<Establishment> {
    return this.http.post<Establishment>(`${this.baseUrl}`, establishment)
      .pipe(
        map(obj => obj),
        catchError(error => this.ErrorHandler(error))
      )
  }

  read(): Observable<Establishment[]> {
    return this.http.get<Establishment[]>(`${this.baseUrl}`)
      .pipe(
        map(obj => obj),
        catchError(error => this.ErrorHandler(error))
      )
  }

  readById(id: string | number): Observable<Establishment> {
    return this.http.get<Establishment>(`${this.baseUrl}/${id}`)
      .pipe(
        map(obj => obj),
        catchError(error => this.ErrorHandler(error))
      )
  }

  update(establishment: Establishment): Observable<Establishment> {
    return this.http.put<Establishment>(`${this.baseUrl}/${establishment.id}`, establishment)
      .pipe(
        map(obj => obj),
        catchError(error => this.ErrorHandler(error))
      )
  }

  delete(id: string | number): Observable<Establishment> {
    return this.http.delete<Establishment>(`${this.baseUrl}/${id}`)
      .pipe(
        map(obj => obj),
        catchError(error => this.ErrorHandler(error))
      )
  }

  ErrorHandler(_error: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }
}
