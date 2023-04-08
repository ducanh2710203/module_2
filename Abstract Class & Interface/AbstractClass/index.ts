import {Tiger} from "./tiger";
import {Chicken} from "./chicken";
import {Orange} from "./Orange";
import {Apple} from "./apple";
console.log('---Animals-----')
let animals = []

animals[0] = new Tiger();
animals[1] = new Chicken();

animals.forEach((item, index) => {
    console.log(item.makeSound());
    if (item instanceof Chicken) {
        console.table(item.howToEat())
    }
})

console.log('---Fruits-----')
let fruits = []

fruits[0] = new Apple();
fruits[1] = new Orange();

fruits.forEach(item => {
    console.table(item.howToEat())
})