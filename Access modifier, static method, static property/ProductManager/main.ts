import {Product} from "./Product";
import {ProductManager} from "./Product";
let laptop = new Product("laptop",100)
let iphone = new Product("iphone",10)
let productManager = new ProductManager()
productManager.add = laptop
productManager.add = iphone
console.log(productManager.all)
