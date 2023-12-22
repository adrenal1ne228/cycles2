let obj3 = {
    a: 1,
    b: 2,
    c: 3
}

for(let key in obj3){
    console.log(key);
    console.log(obj[key]);
}

let obj1 = {
    emp1: 100,
    emp2: 200,
    emp3: 300,
    emp4: 400,
    emp5: 500,
    emp6: 600,
    emp7: 700,
}

for(let key in obj1){
    console.log(obj1[key]);
    obj1[key] = obj1[key]*110/100;
    console.log(obj1[key]);
}

let obj2 = {
    emp1: 100,
    emp2: 200,
    emp3: 300,
    emp4: 400,
    emp5: 500,
    emp6: 600,
    emp7: 700,
}

for(let key in obj2){
    if(obj2[key]<=400){
        obj2[key] = obj2[key]*110/100;
    }
    console.log(obj2[key]);
}

let keys = ['a', 'b', 'c', 'd', 'e'];
let values = [1, 2, 3, 4 ,5];

let obj = {};
for(let i=0; i<5; i++){
    let key = keys[i];
    let value = values[i];

    obj[key] = value;
}
console.log(obj);