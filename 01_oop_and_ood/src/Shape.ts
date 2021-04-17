import { Point } from "./Point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);

  constructor(
    points: Point[],
    color: string = "green",
    filled: boolean = true
  ) {
    if (points.length < 3) {
      throw new Error("At lease 3 points are required");
    }

    this.points = points;
    this.color = color;
    this.filled = filled;
  }

  toString(): string {
    const points = this.points.map((point) => point.toString());

    return `A Shape with color of ${this.color} and ${
      this.filled ? "filled" : "not filled"
    }. Points: ${points.join(", ")}.`;
  }

  getPerimeter(): number {
    return this.points.reduce((acc: number, point: Point, i: number) => {
      const index = i ? i : this.points.length;

      return acc + point.distance(this.points[index - 1]);
    }, 0);
  }

  abstract getType(): string;
}
