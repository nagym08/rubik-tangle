export class Tile{

    constructor(
        public id: number, 
        public colors: Color[], 
        public direction: Direction, 
        public imagePath: string){}

    public rotateLeft(): void{
        this.colors.push(this.colors.shift());
        this.colors.push(this.colors.shift());

        switch(this.direction){
            case Direction.Up:
                this.direction = Direction.Left;
                break;
            case Direction.Down:
                this.direction = Direction.Right;
                break;
            case Direction.Left:
                this.direction = Direction.Down;
                break;
            case Direction.Right:
                this.direction = Direction.Up;
                break;
        }
    }

    public rotateRight(): void{
        this.colors.unshift(this.colors.pop());
        this.colors.unshift(this.colors.pop());

        switch(this.direction){
            case Direction.Up:
                this.direction = Direction.Right;
                break;
            case Direction.Down:
                this.direction = Direction.Left;
                break;
            case Direction.Left:
                this.direction = Direction.Up;
                break;
            case Direction.Right:
                this.direction = Direction.Down;
                break;
        }
    }
}

export enum Direction{
    Up,
    Right,
    Down,
    Left
}

export enum Color{
    Red,
    Purple,
    Yellow,
    Green
}