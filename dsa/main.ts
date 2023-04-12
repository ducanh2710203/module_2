import {ArrayList} from "./ArrayList";

interface Post {
    title: string
}


// @ts-ignore
let arrayList = new ArrayList<Post>();
arrayList.add({title: 'Lập trình JS'});
arrayList.add({title: 'Lập trình PHP'});
arrayList.add({title: 'Lập trình Java'});

console.table(arrayList.container)
console.table(arrayList.get(1))
arrayList.remove()
console.table(arrayList.container)


