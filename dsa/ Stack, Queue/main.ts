import {Stack} from "./Stack";
import {Queue} from "./Queue";

let stack = new Stack<number>();
stack.push(1);
stack.push(3);
stack.push(5);
stack.push(7);
stack.push(7);
stack.push(5);
stack.push(3);
stack.push(1);

let queue = new Queue<number>();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(7);
queue.enqueue(5);
queue.enqueue(3);
queue.enqueue(2)
function chuoidoixung() {
    let t :string =""
    for (let i = 0; i < queue.size(); i++) {

        if (stack.pop() != queue.dequeue()){
           t =  "chuỗi ko đối xứng "
            return t
        }
        else {
            t = "chuỗi đôối xứng"

        }
        return t
    }
}

console.log(chuoidoixung())