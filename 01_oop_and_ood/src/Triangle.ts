import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {
    constructor(point1: Point, point2: Point, point3: Point);
    constructor(point1: Point, point2: Point, point3: Point, color: string, filled: boolean);
    
    constructor(point1: Point, point2: Point, point3: Point, color: string = 'green', filled: boolean = false) {
        super([point1, point2, point3], color, filled);
    }

    toString(): string {
        const points = this.points.map((point, i) => `v${i + 1}=${point.toString()}`);

        return `Triangle[${points.join(',')}]`;
    }

    getType(): string {
        if (this.isEquilateral()) {
            return 'equilateral triangle';
        }

        if (this.isIsosceles()) {
            return 'isosceles triangle'
        }

        return 'scalene triangle'
    }

    private getSidesLengths(): number[] {
        return this.points.map((point, i) => {
            const index = i ? i : this.points.length;

            return point.distance(this.points[index - 1]);
        })
    }

    private isEquilateral(): boolean {
        const sideLengths = this.getSidesLengths();

        return sideLengths.every(length => length === sideLengths[0]);
    }

    private isIsosceles(): boolean {
        const sideLengths = this.getSidesLengths();

        return sideLengths[0] === sideLengths[1] || sideLengths[0] === sideLengths[2] || sideLengths[1] === sideLengths[2];
    }
}
