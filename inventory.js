const inventory = [

    {type:   "machine", value: 5000},


    {type:   "machine", value:  650},


    {type:      "duck", value:   10},


    {type: "furniture", value: 1200},


    {type:   "machine", value:   77}


]

let totalMachineValue = inventory.filter((e)=>e.type === "machine").reduce((accumulator, currentValue) => accumulator + currentValue.value,0)
console.log(totalMachineValue)