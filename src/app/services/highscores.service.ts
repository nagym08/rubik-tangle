import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Highscore } from '../highscores/highscore';

@Injectable({
  providedIn: 'root'
})
export class HighscoresService {

  private apiUrl = "https://localhost:44357/api/highscores";

  constructor(private httpClient: HttpClient) { }

  getHighscores(): Observable<Highscore[]>{
    return this.httpClient.get<Highscore[]>(this.apiUrl)
    .pipe(
      catchError(this.handleError<Highscore[]>('getHighscores', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  saveHighscore(score: number): void{
    this.httpClient.post(this.apiUrl, {"CompletionDate": new Date(), "Steps": score})
    .pipe(
      catchError(this.handleError('Saving score'))
    ).subscribe(() => {
      console.log("Save score complete.");
      });
  }
}
