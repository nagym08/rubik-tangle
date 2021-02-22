import {Color, Direction, Tile} from './tile';

describe('tile', () =>{
    
    it('should shift all colors to the left by 2 positions', () => {
        const tile: Tile = new Tile(0, [
            Color.Yellow, Color.Red, 
            Color.Green, Color.Purple, 
            Color.Yellow, Color.Green, 
            Color.Purple, Color.Red
            ], Direction.Up, "dummy.jpg");
        tile.rotateLeft();
        let result = tile.colors;
        expect(result).toEqual([
            Color.Green, Color.Purple, 
            Color.Yellow, Color.Green, 
            Color.Purple, Color.Red,
            Color.Yellow, Color.Red
            ])
    });

    it('should shift all colors to the left by 4 positions', () => {
        const tile: Tile = new Tile(0, [
            Color.Yellow, Color.Red, 
            Color.Green, Color.Purple, 
            Color.Yellow, Color.Green, 
            Color.Purple, Color.Red
            ], Direction.Up, "dummy.jpg");
        tile.rotateLeft();
        tile.rotateLeft();
        let result = tile.colors;
        expect(result).toEqual([ 
            Color.Yellow, Color.Green, 
            Color.Purple, Color.Red,
            Color.Yellow, Color.Red,
            Color.Green, Color.Purple
            ])
    });

    it('should shift all colors to the left by 6 positions', () => {
        const tile: Tile = new Tile(0, [
            Color.Yellow, Color.Red, 
            Color.Green, Color.Purple, 
            Color.Yellow, Color.Green, 
            Color.Purple, Color.Red
            ], Direction.Up, "dummy.jpg");
        tile.rotateLeft();
        tile.rotateLeft();
        tile.rotateLeft();
        let result = tile.colors;
        expect(result).toEqual([
            Color.Purple, Color.Red,
            Color.Yellow, Color.Red,
            Color.Green, Color.Purple,
            Color.Yellow, Color.Green
            ])
    });

    it('should shift all colors to the original positions', () => {
        const tile: Tile = new Tile(0, [
            Color.Yellow, Color.Red, 
            Color.Green, Color.Purple, 
            Color.Yellow, Color.Green, 
            Color.Purple, Color.Red
            ], Direction.Up, "dummy.jpg");
        tile.rotateLeft();
        tile.rotateLeft();
        tile.rotateLeft();
        tile.rotateLeft();
        let result = tile.colors;
        expect(result).toEqual([
            Color.Yellow, Color.Red, 
            Color.Green, Color.Purple, 
            Color.Yellow, Color.Green, 
            Color.Purple, Color.Red
            ])
    });
  
    it('should shift all colors to the right by 2 positions', () => {
        const tile: Tile = new Tile(0, [
            Color.Yellow, Color.Red, 
            Color.Green, Color.Purple, 
            Color.Yellow, Color.Green, 
            Color.Purple, Color.Red
            ], Direction.Up, "dummy.jpg");
        tile.rotateRight();
        let result = tile.colors;
        expect(result).toEqual([
            Color.Purple, Color.Red,
            Color.Yellow, Color.Red, 
            Color.Green, Color.Purple, 
            Color.Yellow, Color.Green
            ])
    });

    it('should shift all colors to the right by 4 positions', () => {
        const tile: Tile = new Tile(0, [
            Color.Yellow, Color.Red, 
            Color.Green, Color.Purple, 
            Color.Yellow, Color.Green, 
            Color.Purple, Color.Red
            ], Direction.Up, "dummy.jpg");
        tile.rotateRight();
        tile.rotateRight();
        let result = tile.colors;
        expect(result).toEqual([
            Color.Yellow, Color.Green,
            Color.Purple, Color.Red,
            Color.Yellow, Color.Red, 
            Color.Green, Color.Purple
            ])
    });

    it('should shift all colors to the right by 6 positions', () => {
        const tile: Tile = new Tile(0, [
            Color.Yellow, Color.Red, 
            Color.Green, Color.Purple, 
            Color.Yellow, Color.Green, 
            Color.Purple, Color.Red
            ], Direction.Up, "dummy.jpg");
        tile.rotateRight();
        tile.rotateRight();
        tile.rotateRight();
        let result = tile.colors;
        expect(result).toEqual([
            Color.Green, Color.Purple, 
            Color.Yellow, Color.Green,
            Color.Purple, Color.Red,
            Color.Yellow, Color.Red
            ])
    });

    it('should shift all colors to the original positions', () => {
        const tile: Tile = new Tile(0, [
            Color.Yellow, Color.Red, 
            Color.Green, Color.Purple, 
            Color.Yellow, Color.Green, 
            Color.Purple, Color.Red
            ], Direction.Up, "dummy.jpg");
        tile.rotateRight();
        tile.rotateRight();
        tile.rotateRight();
        tile.rotateRight();
        let result = tile.colors;
        expect(result).toEqual([
            Color.Yellow, Color.Red, 
            Color.Green, Color.Purple, 
            Color.Yellow, Color.Green, 
            Color.Purple, Color.Red
            ])
    });

    it('should rotate the directions to to left', () => {
        const tile: Tile = new Tile(0, [], Direction.Up, "dummy.jpg");
        
        tile.rotateLeft();
        let result = tile.direction;
        expect(result).toEqual(Direction.Left);
        
        tile.rotateLeft();
        result = tile.direction;
        expect(result).toEqual(Direction.Down);

        tile.rotateLeft();
        result = tile.direction;
        expect(result).toEqual(Direction.Right);

        tile.rotateLeft();
        result = tile.direction;
        expect(result).toEqual(Direction.Up);
    });

    it('should rotate the directions to to right', () => {
        const tile: Tile = new Tile(0, [], Direction.Up, "dummy.jpg");
        
        tile.rotateRight();
        let result = tile.direction;
        expect(result).toEqual(Direction.Right);
        
        tile.rotateRight();
        result = tile.direction;
        expect(result).toEqual(Direction.Down);

        tile.rotateRight();
        result = tile.direction;
        expect(result).toEqual(Direction.Left);

        tile.rotateRight();
        result = tile.direction;
        expect(result).toEqual(Direction.Up);
    });
})