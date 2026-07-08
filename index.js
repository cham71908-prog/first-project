/*let x = 5;
let y = 10;
 console.log(x + y);

//  number to string
 let a = 15;
 console.log(typeof 100..toString());

// string to number
let str = "123";
let num = Number(str);
console.log(num);

// boolean to number
let bool = true;
let numBool = Number(bool);
console.log(numBool);

console.log("Hello, World!");
let name = "HICHAM";
name = "HICHAM ACHDDIR";
console.log(`My name is ${name}`);

const birthyear = 2002;
const currentyear = 2026;
const age = currentyear - birthyear;
console.log(`I am ${age} years old.`);

let n = 18;
n = 25;
console.log(n);

let h = 5;
h++;
console.log(h);

let price = 19.99;
let tax = 0.2;
let total = price + price * tax;
console.log(total);

// slice
let str1 = "Hello, World!";
let sliced = str1.slice(0, 5);
console.log(sliced);

// length
let str2 = "JavaScript";
console.log(str2.length);

// split
let str3 = "apple,banana,orange";
let fruits = str3.split(",", 2);
console.log(fruits);  

// access
let str4 = "Programming";
console.log(str4[4]);*/

/*constantes
1 - Array
1 - Object
3 - function
4 - RegExp 

const countries = ['Maroc', 'Canada', 'Qatar']
countries[2]='Spain'
countries.push('palastine')
console.table(countries)

const name = 'i love java script ';

    console.log(name.indexOf('a',9));
    console.log(name.lastIndexOf('a',9));
    console.log(name.includes('m'));
    console.log(name.startsWith('love',2));
    console.log(name.endsWith('j',8));


const animal = {
    color : 'black',
    age : '5',
    owner : 'kamal',
    type : 'dog'
};
const div = document.createElement('div');
div.textContent= `
    color: ${animal.color},
    age : ${animal.age},
    owner : ${animal.owner},
    type : ${animal.type}
`
document.body.appendChild(div)
const displayAnimal =div =>{
    document.body.appendChild(div);

};
displayAnimal(div)
    

//Les fonctions fléchées (arrow functions)

function some(a, b) {
    return a + b;
}

const result = some(5, 10);

const hello = document.createElement('div');

hello.textContent = result;

document.body.appendChild(hello); 



// DataType : [ Array ]
let names = ['hicham', 'ahmed', 'achddir']
console.log(names[names.length-1]); 

let objects = [1,2,3,[4,5,6,['k', 'w', 'p']]]
console.log(objects[3][3][0])

let title = ['hicham','ahmed', 'taha']
title [2] = 'brother'
console.log(title)

const hm = ['hicham','ahmed', 'taha']
hm.push('hamza') // push : add element to last index
hm.unshift('akram') // unshift : add element to first index 
//hm.shift() // shift() : delete  add element to first index 
//hm.pop() //  pop() : delete element to last index
console.log(hm)

const ls = ['hicham','ahmed', 'taha']
ls.splice(1,1,'achddir') // splice : (start ,count ,add ,add)
                        // slice : (start , end)
console.log(ls)

// Array search
const arr = ['casablanca' ,'rabat' ,'sale' ,'marakech' ,'rabat' ,'casablanca'] 
console.log(arr.indexOf('rabat',2))
console.log(arr.lastIndexOf('casablanca',-1))
console.log(arr.includes('marakech',4))

// Sort Array
const js = [34, 35, 325, 523, 2, 4]
console.log(js.sort((a,b) => a - b))
console.log(js.sort((a,b) => b - a))

// Reverse Array
const sj = [46, 64, 63]
console.log(sj.reverse())

//Concat and Join Array
let html1 = ['casa' ,'marksh' ,'taza']
let html2 = ['tetoun' ,'tange' ,'knitra']


console.log(html1.concat(html2)) // concat
console.log(html1.join('-')) // join


//comparison
let Askemail =  prompt('enter your email')  // prompt() : كتفتح نافذة صغيرة كتطلب من المستخدم يدخل قيمة.
let email = 'hicham@gmail.com'
console.log(Askemail.toLocaleLowerCase().trim() == email) // toLowerCase() : كتحول جميع الحروف إلى حروف صغيرة.
                                                          // trim() : كتحيد المسافات من البداية والنهاية
// == compraison values
console.log( 5 == '5' ) // true

// === comparison values and datatypes 
console.log( 5 === '5' ) // false

// !>

console.log( 5 != '5' ) // false 

let product = 'iphone 18';
let size = 10 ;
let salary = 30000 ;
console.log( size <= 10 && salary == 30000 ) ; // && : and
console.log( size == 10 || salary == 1000 ) ; // || : or



// if

let role = prompt('what is your role ?')

if(role == 'admin')
{
    document.write('update, create, delete');
}
else if(role == 'moderator')
{
    document.write('update');
}
else
{
document.write('hello user');
} 

// Another example for ' if '

const resulte = prompt('what is result')

if (resulte >= 95)
{
    document.write('excellent')
}        
else if (resulte >= 80)
{
    document.write('very good')
}    
else if ( resulte >= 50)
{
    document.write('good')
}
else
{
    document.write('fail')
}


const student = prompt ('student write your password')

if (student == 1627)
{
    document.write('15,8')
}
else if (student == 3468)
{
    document.write('12.47')
}
else
{
    document.write('error')
}
*/
// Another example
 let age = Number(prompt('what is your age?'))
 age == 18
   ?document.write('you are 18 now , hello')
   :age < 18
   ?document.write('no , you are very young ')
   :document.write('error');

let golls = Number(prompt('what is your age ?'))
let result = golls > 18? 'hello user'
:golls ==  18?
'you are 18 now'
:'no you are very young'
console.log(result)

// Switch
let role = prompt('what is your role')
switch(role)
{
    case 'admin':
        document.write('create , update , deleted');
        break;
    case 'moderator':
            document.write('create , update');
        break;
    case 'editor':
        document.write('update');
        break;
    default:
        document.write('hello user');

}

// loop 1
//start ; condition , steps
for( let i = 0; i < 5 ; i += 2 )
{
    console.log(i);
}

// loop 2

let names = ['hicham' , 'taha' ,'mohamed']

for( let i = names.length -1; i >= 0 ; i--)
{
    console.log(names[i]);
}

for( let i = 0 ; i < names.length ; i++)
{
    console.log(names[i])
}


/*
function add() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    const result = Number(num1) + Number(num2);

    document.getElementById("result").textContent = result;
}

function subtract() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    const result = Number(num1) - Number(num2);

    document.getElementById("result").textContent = result;
}

function multiply() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    const result = Number(num1) * Number(num2);

    document.getElementById("result").textContent = result;
}

function divide() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    const result = Number(num1) / Number(num2);
    
    document.getElementById("result").textContent = result;
} 
    */
