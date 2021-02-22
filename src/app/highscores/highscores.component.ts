import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HighscoresService } from '../services/highscores.service';
import { Highscore } from './highscore';

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.css']
})
export class HighscoresComponent implements OnInit {

  highscores: Highscore[];
  loading: boolean;

  constructor(private highscoresService: HighscoresService) { }

  ngOnInit() {
    this.loading = true;
    this.getHighscores();
  }

  getHighscores(): void{
    this.highscoresService
      .getHighscores()
      .subscribe(highscores => {
        this.highscores = highscores;
        this.loading = false;
      });
  }

}
