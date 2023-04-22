// 1
console.log('task 1');
const arr1 = ["guba", "mingecevir", "baku", "gazag", "gence", "shirvan"];
function cities(cityArr) {
 let newArr1 = cityArr.map((item)=>item[0].toLocaleUpperCase()+item.slice(1,-1)+item.at(-1).toLocaleUpperCase())
return newArr1;
}
console.log(cities(arr1));

///////////////////////////////////// 2
console.log('task 2');
let text = 'We are MERN-Stack developers'

// 2.1
let newArr2 = text.replace('MERN-Stack','Front-end')
console.log(newArr2);

// 2.2
let newArr3 = text.replaceAll('e','a',)
console.log(newArr3);

// 2.3
let newArr4 = text.concat(' in Microsoft!')
console.log(newArr4);

// 2.4
let newText = []
text.split("").map((el,index)=>el.toLocaleLowerCase()==='r' ? newText.push(index) : newText)
console.log(newText);

// 2.5
console.log(text.toLocaleLowerCase().indexOf('r',5));

// 2.6
let vowels = ['a','e','o','u','i']
let newText2 = []
let result = text.split('').filter((el,index)=>vowels.includes(el) && ! newText2.includes(el) && newText2.push(el))
console.log(result)
///////////////////////////////////////////////////3
console.log('task 3');
const arr3 = [
        {
            region: 'Yasamal',
            area: 170,
        },
    
        {
            region: 'Nizami',
            area: 20,
        },
    
        {
            region: 'Nesimi',
            area: 10,
        },
    
        {
            region: 'Sebail',
            area: 30,
        },
        {
            region: 'Xetai',
            area: 30,
        },
    
    ]
    
    let newArr7 = arr3.reduce((acc,current,index)=>current.region.length===6 ? acc+=current.area : acc,0)
    console.log(newArr7);
    
////////////////////////////////////////////4
console.log('task 4');
const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6]
console.log(arr4.sort((a,b)=>a-b))

//////////////////////////////////////////////5
console.log('task 5');
const arr5 = [5, [8], [9, ['hi', ["don't touch me"], [0]], '9']]
console.log(arr5.flat(Infinity));

////////////////////////////////////////////////6
console.log('task 6');
const colors = ['green', 'blue', 'yellow', 'black', 'red', 'brown', 'white', 'gray', 'violet', 'pink']
console.log(colors.sort((a,b)=>a.length-b.length || a.localeCompare(b) )) 