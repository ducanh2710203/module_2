function getBaseArea(radius: number) {
    let baseArea: number = Math.PI * radius * radius;
    return baseArea;
}

function getPerimeter(radius: number) {
    let perimeter: number = 2 * Math.PI * radius;
    return perimeter;
}

export class Cylinder {
    public static getVolume(radius: number, height: number): number {
        let baseArea = getBaseArea(radius);
        let perimeter = getPerimeter(radius);
        let volume: number = perimeter * height + 2 * baseArea;
        return volume;
    }
}