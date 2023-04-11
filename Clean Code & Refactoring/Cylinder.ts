export class Cylinder {
    public static getVolume(radius: number, height: number): number {
        let baseArea: number = Math.PI * radius * radius;
        let perimeter: number = 2 * Math.PI * radius;
        let volume: number = perimeter * height + 2 * baseArea;
        return volume;
    }
}