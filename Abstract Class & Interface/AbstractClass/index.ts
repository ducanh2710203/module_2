import {Chicken} from "./chicken";
import {Tiger} from "./tiger";
let animals=[]
animals[0]=new Tiger()
animals[1]=new Chicken()
animals.forEach((n,index) => {
    console.log(n.makeSound())
})