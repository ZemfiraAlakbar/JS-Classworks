const arr=[
    0,1,2,3,4,5,6,7,8,9,10
];
console.log(arr);

const arr2=[
    1,true,"task",
]
console.log(arr2)

const arr3=[
    -1,-2,-3,-4,
]
const arr4=arr3
console.log(arr4)

const arr5=[
    -1,-2,-3
]
arr5.push(8,9)
console.log(arr5)

const arr6=[]
arr6.push(5,6,7)
arr6.shift(5)
arr6.unshift(1)
console.log(arr6)

const arr7=[
    "zenfira","alakbarova",21, "Quba"
]
arr7[3]='Qusar'
console.log(arr7)

const arr8=[
    1,2,3,4,5,6,7,8
]
for(let num of arr8) {
    console.log(num);
}



const obj = {
    id:1,
    firstName: "Zenfira",
    lastName: "Alakbarova",
    Location: "Gdu2",  
    }
    console.log(obj);
    const obj2=obj;
    console.log(obj.id=3)

    for(let key in obj) {
        console.log(key);
    }

    for(let value in obj) {
        console.log(obj[value]);
    }

    delete obj.Location;
    console.log(obj);