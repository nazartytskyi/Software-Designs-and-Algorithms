export class Point {
  private x: number;
  private y: number;

  constructor();
  constructor(x: number, y: number);

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  distance(): number;
  distance(other: Point): number;
  distance(x: number, y: number): number;

  distance(...args: any[]): number {
    switch (args.length) {
      case 0:
        return this.distanceTo(0, 0);
      case 1:
        return this.distanceTo(args[0].x, args[0].y);
      case 2:
        return this.distanceTo(args[0], args[1]);
    }
  }

  private distanceTo(x: number, y: number): number {
    return +Math.sqrt((this.x - x) ** 2 + (this.y - y) ** 2).toFixed(3);
  }
}
