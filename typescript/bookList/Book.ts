export  class Book {
    title: string = ""
    author: string = ""
    alreadyRead: boolean

    constructor(title: string, author: string, alreadyRead: boolean) {
        this.author = author
        this.title = title
        this.alreadyRead = alreadyRead
    }
}
