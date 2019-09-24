
//1 
console.log('1 exercise:');
let hello = 'hello';
let world = 'world';

function sayHello() {
    console.log(`${hello} ${world}`)
}
sayHello();

//2
console.log('2 exercise:');
const multiply = (a = 7, b = 5) => console.log(a * b);
multiply(5,8);
multiply(7);
multiply();

//3
console.log('3 exercise:');
let avarege = (...args) => {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum / args.length;
}
console.log(avarege(1));
console.log(avarege(1,3));
console.log(avarege(1,3,6,6));

//4
console.log('4 exercise:');
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(avarege(...grades));

//5 
console.log('5 exercise:');
const data = [1, 4, 'Iwona', false, 'Nowak'];
const [ , ,firstname, ,secondname] = data;
console.log(firstname,secondname);