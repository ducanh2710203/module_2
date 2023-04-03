let arr = [1,2,4,3,5];
let s = (i) =>{

    return i*i
}
function arrsqr(a,arr) {
    let newArr = []
    arr.forEach((element)=>{
        newArr.push(a(element))
    })
    return newArr
}


console.log(arrsqr(s,arr))