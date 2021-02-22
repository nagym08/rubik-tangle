import { Component, OnInit } from '@angular/core';
import { HighscoresService } from '../services/highscores.service';
import { Game } from './game';
import { Color, Direction, Tile } from './tile';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  
  private game: Game;
  currentScore: number;

  constructor(private highscoresService: HighscoresService) {
      this.game = new Game();
      this.game.shuffleTiles();
   }

  ngOnInit() {
  }

  onSolveClick(): void{
    this.game.solve();
    // this.highscoresService.saveHighscore(this.game.stepsToSolve);
  }

  onShuffleClick(): void{
    this.game.shuffleTiles();
  }
}
