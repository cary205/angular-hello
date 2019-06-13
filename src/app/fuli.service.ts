import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FuliService {
  
  private baseUrl = 'https://gank.io/api/random/data/%E7%A6%8F%E5%88%A9/';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
  getFulis (): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl + '20')
      .pipe(
        tap(_ => this.log('fetched fuli')),
        catchError(this.handleError('getFulies', []))
      );
  }
  
  
  /** Log a FuliService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`FuliService: ${message}`);
  }
  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
