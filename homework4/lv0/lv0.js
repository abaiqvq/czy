let obj1 = {
    name:"abai",
    age:19,
    gender:"male"
}

console.log(obj1);

let obj2 = new Object();
obj2.name = "lin";
obj2.age = 17;
obj2.gender = "female";
console.log(obj2);

function Person(){
    this.name = "yue";
    this.age = 18;
    this.genter = "female";
}
let obj3 = new Person();

console.log(obj3);
