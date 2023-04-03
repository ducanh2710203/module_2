function geaks() {
    console.log("for(;;)")
    for (let i = 0; i < 11; i++) {
        if (i%2==0){
            console.log(i)
        }
    }
    console.log("forof")
    for (let i of ['ha noi', 20.23,2003]) {
        console.log(i)
    }
    console.log( "forin ")
    let obj= {
        name : "ngu",
        year : 100,
        hups : "ocs chos",
        num : 5120321
    }
    for (let i in obj) {
        console.log(obj[i])
    }
}
geaks()
