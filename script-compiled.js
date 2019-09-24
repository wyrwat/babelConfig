'use strict';

//1 
console.log('1 exercise:');
var hello = 'hello';
var world = 'world';

function sayHello() {
    console.log(hello + ' ' + world);
}
sayHello();

//2
console.log('2 exercise:');
var multiply = function multiply() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
    return console.log(a * b);
};
multiply(5, 8);
multiply(7);
multiply();

//3
console.log('3 exercise:');
var avarege = function avarege() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var sum = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var arg = _step.value;

            sum += arg;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return sum / args.length;
};
console.log(avarege(1));
console.log(avarege(1, 3));
console.log(avarege(1, 3, 6, 6));

//4
console.log('4 exercise:');
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(avarege.apply(undefined, grades));

//5 
console.log('5 exercise:');
var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = data[2],
    secondname = data[4];

console.log(firstname, secondname);
