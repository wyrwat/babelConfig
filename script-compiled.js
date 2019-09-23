'use strict';

// 1 
var hello = 'hello';
var world = 'world';

function sayHello() {
    console.log(hello + ' ' + world);
}

sayHello();

//2
var a = 3;
var b = 8;

var multiplay = function multiplay() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
    return console.log(a * b);
};

multiplay(a);
multiplay(b);
multiplay(a, b);
