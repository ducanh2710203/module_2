import {Animal} from "./Animal";
import {Edible} from "./Edible";
export class Chicken extends Animal implements Edible{
    makeSound() {
        return "-gà sủa: cục tác cục tác"
    }

    howToEat(): string {
        return "could be fried";
    }

}