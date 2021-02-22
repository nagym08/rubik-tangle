import { Color, Direction, Tile } from "./tile";

export class Game{

    tiles: Tile[]
    solution: Tile[];
    stepsToSolve: number;

    constructor(){
        this.initTiles();
    }

    public shuffleTiles(): void{
      this.solution = [];
      this.stepsToSolve = 0;
      this.randomizeTileOrder();
      this.tiles.forEach(tile => this.rotateTileRandomly(tile));
    }

    public solve(): void{
      this.solveWithBacktrack(0);
    }

    private solveWithBacktrack(indexToPlace: number): void{
      let tileToTestIdx = 0;
      while(this.solution.length < this.tiles.length && tileToTestIdx < this.tiles.length){
        if(this.isTileFit(indexToPlace, this.tiles[tileToTestIdx])){
          this.solution[indexToPlace] = this.tiles[tileToTestIdx];
          if(this.solution.length < this.tiles.length){
            this.solveWithBacktrack(indexToPlace + 1);
          }
        }
        tileToTestIdx++;
      }

      // if(this.solution.length < this.tiles.length){
      //   this.solution.pop();
      // }
    }

    public isTileFit(indexToPlace: number, tile: Tile): boolean{
      
      let usedTiles = (this.solution.slice(0, indexToPlace));

      if(usedTiles.some(t => t.id === tile.id)){
        return false;
      }

      // if(this.solution.some(t => t.id === tile.id)){
      //   return false;
      // }

      let rotationCount = 0;
      let rotationLimit = 4;
      let isFit = false;

      while(isFit === false && rotationCount < rotationLimit){
        this.stepsToSolve++;
        isFit = this.isTileFitLeft(indexToPlace, tile) && this.isTileFitTop(indexToPlace, tile);
        
        if(isFit === false){
          tile.rotateRight();
          rotationCount++;
        }
      }

      return isFit;
    }

    public isTileFitLeft(indexToPlace: number, tile: Tile): boolean{
      let isTileFitLeft = true;

      if(indexToPlace === 0 || indexToPlace === 3 || indexToPlace === 6){
        return true;
      }

      isTileFitLeft = tile.colors[6] === this.solution[indexToPlace - 1].colors[3] && tile.colors[7] === this.solution[indexToPlace - 1].colors[2];

      return isTileFitLeft;
    }

    public isTileFitTop(indexToPlace: number, tile: Tile): boolean{
      let isTileFitTop = true;

      if(indexToPlace === 0 || indexToPlace === 1 || indexToPlace === 2){
        return true;
      }

      isTileFitTop = tile.colors[0] === this.solution[indexToPlace - 3].colors[5] && tile.colors[1] === this.solution[indexToPlace - 3].colors[4];

      return isTileFitTop;
    }

    private randomizeTileOrder(): void{
      // for (let i = this.tiles.length - 1; i > 0; i--) {
      //   let j = Math.floor(Math.random() * (i + 1));
      //   [this.tiles[i], this.tiles[j]] = [this.tiles[j], this.tiles[i]];
      // }

      // let tempArray = [];
      // while(this.tiles.length !== 0){
      //   let randomIndex = Math.floor(Math.random() * this.tiles.length);
      //   tempArray.push(this.tiles[randomIndex]);
      //   this.tiles.slice(randomIndex, 1);
      // }
      // this.tiles = tempArray;

      this.tiles = this.tiles.sort(() => Math.random() - 0.5);
    }

    private rotateTileRandomly(tile: Tile){
      let numOfRotations = Math.floor(Math.random() * 3) + 1
      for (let i = 0; i < numOfRotations; i++){
        tile.rotateRight();
      }
    }

    private initTiles():void {
        this.tiles = [
          new Tile(0,[
            Color.Yellow, Color.Red, 
            Color.Green, Color.Purple, 
            Color.Yellow, Color.Green, 
            Color.Purple, Color.Red
          ], 
            Direction.Up,
            "assets/images/square_1.png"
          ),
          new Tile(1,[
            Color.Yellow, Color.Purple, 
            Color.Green, Color.Red, 
            Color.Yellow, Color.Red, 
            Color.Purple, Color.Green
          ], 
            Direction.Up,
            "assets/images/square_2.png"
          ),
          new Tile(2,[
            Color.Purple, Color.Green, 
            Color.Yellow, Color.Red, 
            Color.Purple, Color.Yellow, 
            Color.Red, Color.Green
          ], 
            Direction.Up,
            "assets/images/square_3.png"
          ),
          new Tile(3,[
            Color.Green, Color.Yellow, 
            Color.Purple, Color.Yellow, 
            Color.Red, Color.Green, 
            Color.Purple, Color.Red
          ], 
            Direction.Up,
            "assets/images/square_4.png"
          ),
          new Tile(4,[
            Color.Red, Color.Yellow, 
            Color.Purple, Color.Green, 
            Color.Red, Color.Green, 
            Color.Yellow, Color.Purple
          ], 
            Direction.Up,
            "assets/images/square_5.png"
          ),
          new Tile(5,[
            Color.Yellow, Color.Purple, 
            Color.Red, Color.Green, 
            Color.Yellow, Color.Red, 
            Color.Green, Color.Purple
          ], 
            Direction.Up,
            "assets/images/square_6.png"
          ),
          new Tile(6,[
            Color.Green, Color.Red, 
            Color.Yellow, Color.Purple, 
            Color.Green, Color.Yellow, 
            Color.Purple, Color.Red
          ], 
            Direction.Up,
            "assets/images/square_7.png"
          ),
          new Tile(7,[
            Color.Green, Color.Red, 
            Color.Purple, Color.Green, 
            Color.Red, Color.Yellow, 
            Color.Purple, Color.Yellow
          ], 
            Direction.Up,
            "assets/images/square_8.png"
          ),
          new Tile(8,[
            Color.Red, Color.Yellow, 
            Color.Green, Color.Yellow, 
            Color.Purple, Color.Red, 
            Color.Green, Color.Purple
          ], 
            Direction.Up,
            "assets/images/square_9.png"
          )
        ];
      }
}