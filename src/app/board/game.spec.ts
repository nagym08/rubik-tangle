import { Game } from "./game";

describe('tile', () =>{
    it('tiles are initialized', () => {
        let game: Game = new Game();
        let result = game.tiles.length;
        expect(result).toEqual(game.numOfTiles)
    });

    // it('tiles are initialized', () => {
    //     let game: Game = new Game();
    //     game.shuffleTiles();

    //     game.solve();

    //     let result = game.tiles.length;
    //     expect(result).toEqual(game.numOfTiles)
    // });

    it('isTileFit - fits on correct values', () =>{
        let game: Game = new Game();
        game.solution = game.tiles;
        let result = game.isTileFit(4, game.tiles[4]);
        expect(result).toBe(true);
    });

    it('isTileFit - unfits on switched values to the left', () =>{
        let game: Game = new Game();
        game.solution = game.tiles;

        let tempColor = game.solution[3].colors[3];
        game.solution[3].colors[3] = game.solution[3].colors[2];
        game.solution[3].colors[2] = tempColor;

        let result = game.isTileFit(4, game.tiles[4]);
        expect(result).toBe(false);
    });
    
    it('isTileFit - unfits on incorrect values to the left', () =>{
        let game: Game = new Game();
        game.solution = game.tiles;

        game.solution[3].colors[3] = game.solution[4].colors[7];
        game.solution[3].colors[2] = game.solution[4].colors[6];

        let result = game.isTileFit(4, game.tiles[4]);
        expect(result).toBe(false);
    });

    it('isTileFit - fits on the side', () =>{
        let game: Game = new Game();
        game.solution = game.tiles;
        let result = game.isTileFit(3, game.tiles[3]);
        expect(result).toBe(true);
    });

    it('isTileFit - unfits on switched values to the top', () =>{
        let game: Game = new Game();
        game.solution = game.tiles;

        let tempColor = game.solution[1].colors[4];
        game.solution[1].colors[4] = game.solution[1].colors[5];
        game.solution[1].colors[5] = tempColor;

        let result = game.isTileFit(4, game.tiles[4]);
        expect(result).toBe(false);
    });

    it('isTileFit - unfits on incorrect values to the top', () =>{
        let game: Game = new Game();
        game.solution = game.tiles;

        game.solution[1].colors[4] = game.solution[1].colors[0];
        game.solution[1].colors[5] = game.solution[1].colors[1];

        let result = game.isTileFit(4, game.tiles[4]);
        expect(result).toBe(false);
    });

    it('isTileFit - fits on the top', () =>{
        let game: Game = new Game();
        game.solution = game.tiles;
        let result = game.isTileFit(2, game.tiles[2]);
        expect(result).toBe(true);
    });

    it('isTileFitLeft - fits on correct values to the left', () =>{
        let game: Game = new Game();
        game.solution = game.tiles;
        let result = game.isTileFitLeft(4, game.tiles[4]);
        expect(result).toBe(true);
    });

    it('isTileFitLeft - unfits on switched values to the left', () =>{
        let game: Game = new Game();
        game.solution = game.tiles;

        let tempColor = game.solution[3].colors[3];
        game.solution[3].colors[3] = game.solution[3].colors[2];
        game.solution[3].colors[2] = tempColor;

        let result = game.isTileFitLeft(4, game.tiles[4]);
        expect(result).toBe(false);
    });

    it('isTileFitLeft - unfits on incorrect values to the left', () =>{
        let game: Game = new Game();
        game.solution = game.tiles;

        game.solution[3].colors[3] = game.solution[4].colors[7];
        game.solution[3].colors[2] = game.solution[4].colors[6];

        let result = game.isTileFitLeft(4, game.tiles[4]);
        expect(result).toBe(false);
    });

    it('isTileFitLeft - fits on the side', () =>{
        let game: Game = new Game();
        game.solution = game.tiles;
        let result = game.isTileFitLeft(3, game.tiles[3]);
        expect(result).toBe(true);
    });
 
    it('isTileFitTop - fits on correct values to the top', () =>{
        let game: Game = new Game();
        game.solution = game.tiles;
        let result = game.isTileFitTop(4, game.tiles[4]);
        expect(result).toBe(true);
    });

    it('isTileFitTop - unfits on switched values to the top', () =>{
        let game: Game = new Game();
        game.solution = game.tiles;

        let tempColor = game.solution[1].colors[4];
        game.solution[1].colors[4] = game.solution[1].colors[5];
        game.solution[1].colors[5] = tempColor;

        let result = game.isTileFitTop(4, game.tiles[4]);
        expect(result).toBe(false);
    });

    it('isTileFitTop - unfits on incorrect values to the top', () =>{
        let game: Game = new Game();
        game.solution = game.tiles;

        game.solution[1].colors[4] = game.solution[4].colors[0];
        game.solution[1].colors[5] = game.solution[4].colors[1];

        let result = game.isTileFitTop(4, game.tiles[4]);
        expect(result).toBe(false);
    });

    it('isTileFitTop - fits on the top', () =>{
        let game: Game = new Game();
        game.solution = game.tiles;
        let result = game.isTileFitTop(1, game.tiles[1]);
        expect(result).toBe(true);
    });
})