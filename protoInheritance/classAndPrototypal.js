/**
 * - Classes as you may know them from languages like Java don’t technically exist in JavaScript. Constructor functions are used instead.
 * - In JavaScript, class inheritance is implemented on top of prototypal inheritance, but that does not mean that it does the same thing.
 * 
 */

// Classical Inheritance

// class ABC {
//     funcOne(params) {
//        console.log('Params inside funcOne : ', params); 
//     }
// }
// class Saurabh extends ABC {
//     funcTwo(params) {
//         console.log('Params inside funcTwo : ', params); 
//     }
// }
// let objSau = new Saurabh();
// console.log('Info about ABC : ', typeof ABC);
// console.log(objSau.funcTwo('TWO'));

// ======================================================================

// http://aaditmshah.github.io/why-prototypal-inheritance-matters/
// Prototypal Inheritance
let rectangle = {
    createObj: function(width, height) {
        let self = Object.create(this);
        self.height = height;
        self.width = width;
        return self;
    },
    area: function () {
        return this.width * this.height;
    }
};
let rect = rectangle.createObj(5, 10); // Its like a constructor function but we are not using 'new' here.
console.log(rect.area());

// Prototypal Inheritance using prototypes 
// Description - Make clone then override.
let square = Object.create(rectangle); // Making clone of rectangle.
square.create = function (side) { // Overriding create function.
    return rectangle.createObj.call(this, side, side);
};
var sq = square.create(5);
console.log(sq.area());

// Prototypal Inheritance using constructors
// function Rectangle(width, height){
//     this.width = width;
//     this.height = height;
// }
// Rectangle.prototype.area = () => {
//      return this.width * this.height;
// }
function Square(side) {
    Rectangle.call(this, side, side);
}

Square.prototype = Object.createObj(rectangle.prototype);
//Square.prototype.contructor = Square;
//let mySq = new Square(3);

console.log('Prototype of Rectangle : ', rectangle.prototype);
console.log('Prototype of Square : ', Square.prototype);
//console.log('Area of square : ', mySq.area());


