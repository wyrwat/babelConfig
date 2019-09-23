
// 1 
let hello = 'hello';
let world = 'world';

function sayHello() {
    console.log(`${hello} ${world}`)
}

sayHello();

//2
let a = 3;
let b = 8;

let multiplay = (a = 7, b = 5) => console.log(a * b);

multiplay(a);
multiplay(b);
multiplay(a, b);

