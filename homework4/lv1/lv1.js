
// 创建对象
let obj1 = {
    name:"abai",
    age:19,
    gender:"male"
}

let obj2 = new Object();
obj2.name = "lin";
obj2.age = 17;
obj2.gender = "female";

function Person(){
    this.name = "yue";
    this.age = 18;
    this.gender = "female";
}
let obj3 = new Person()

// 构架复制函数
let copy = function(insertobj) {
    let newobj = {};
    for(let k in insertobj)
    {
        newobj[k] = insertobj[k];
    }
    return newobj;
}

// 进行复制
let newobj1 = copy(obj1);
let newobj2 = copy(obj2);
let newobj3 = copy(obj3);

// 创建数组并存入
let arr = [];
arr.push(newobj1,newobj2,newobj3);

console.table(arr);
