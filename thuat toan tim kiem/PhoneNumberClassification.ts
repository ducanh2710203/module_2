function PhoneNumberClassification(allnum:string[],Viettel:string[],Mobifone:string[],Vinaphone:string[]) {
    for (let i = 0; i < allnum.length; i++) {
        let telephoneNumber : string = allnum[i]
        if (+telephoneNumber[1]+ +telephoneNumber[0] === 3){
            Viettel.push(telephoneNumber)
        }else if (+telephoneNumber[1]+ +telephoneNumber[0] === 7){
            Mobifone.push(telephoneNumber)
        }else {
            Vinaphone.push(telephoneNumber)
        }
    }
    return [Viettel,Mobifone,Vinaphone]
}
let allnum:string[]= ['038675467476','038432768','0757643875','0757435345','0178621731','01263812']
let Viettel : string[] = []
let Mobifone : string[] = []
let Vinaphone : string[] = []
console.log(PhoneNumberClassification(allnum,Viettel,Mobifone,Vinaphone))

