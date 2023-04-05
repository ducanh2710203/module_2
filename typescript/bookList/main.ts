import {Book} from "./Book";
let book1 = new Book("đệ nhất kiếm tiền","bùi xuân huấn",true)
let book2 = new Book('The Most Human Human','Brian Christian', false);
let book3 = new Book('bao lâu kiêm đc một tỷ gói mè','Nguyễn đức Anh', true);
let booklist : Book[]=[]
booklist.push(book1,book2,book3)
for (let i = 0; i < booklist.length; i++) {
    if(booklist[i].alreadyRead){
        console.log('You already read "' + booklist[i].title+"by"+booklist[i].author);
    }else {
        console.log("You still need to read"+ booklist[i].title+"by"+booklist[i].author)
    }
}
