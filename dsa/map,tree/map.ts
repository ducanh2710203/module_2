let nameMap = new Map();
nameMap.set("Anand",1001);
nameMap.set("Bhargavi",1002);
nameMap.set("Chrestin",1003);
nameMap.set("Daniel",1004);
nameMap.set("Esther",1005);
console.log(nameMap.size);
console.log(nameMap.get("Chrestin"));
console.log(nameMap.get("Esther"));
//Iterating map keys
for (let item = 0; item < nameMap.size; item++)  {
    console.log("Names: "+item);
}
//Iterating map values
for (let item = 0; item < nameMap.size; item++)  {
    console.log("ID: ",item);
}
//Iterating map entries
// @ts-ignore
for (let item of nameMap.entries()) {
    console.log("entries: ", item[0], item[1]);
}
//Destructuri
// ng on object entries
// @ts-ignore
for (let [key, value] of nameMap) {
    console.log("key value pairs: ", key, value);
}
// item Daniel will get deleted, will return 'true' as output
nameMap.delete("Daniel")
// Clear all the entries of the map
nameMap.clear();
console.log(nameMap.size)