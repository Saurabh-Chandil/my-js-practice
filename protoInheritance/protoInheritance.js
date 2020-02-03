/**
 * Topics 
    - Differential Inheritance(Prototype Chain) ~ children have an “invisible link” back to their parent object.
    - Object.create()
 */
/****************** Function Prototypes *********************
 *
 */
// function foo() {     
// }
// console.log('Type of function : ', typeof foo.prototype);

/****************** Constructors & Methods *********************
 * 
 */
function Dog() {
    console.log('Inside Dog function');
    todo: 'TODO';
}
// Dog.prototype.bark = () => {
//     console.log('Dog barks');
// }
Dog.sleep = () => {
    console.log('Dog sleeping');
}
console.log('Dog prototype : ', Dog.prototype);
// Dog.prototype = null;

//var jacky = new Dog();
var jacky = Object.create(Dog); // Diff bw Object.create() and 'new' is extra important.
//var jacky = Object.create(null);
//var jacky = Object.create(Dog.prototype);
jacky.eat = () => {
    console.log('Jacky eats');
}
jacky.eat();
//jacky.sleep();
//jacky.prototype.bark();
//jacky.bark();


// function Tommy() {
//     console.log('This is tommy');
// }
// Tommy.prototype = Object.create(Dog.prototype);
// console.log('Tommy : ',  Tommy);
// console.log('Tommy Prototype : ',  Tommy.prototype);

console.log('Jacky prototype : ', jacky.prototype);
console.log('Jacky __proto__ : ', jacky.__proto__);
// console.log('Bark belongs to jacky : ', jacky.hasOwnProperty('bark'));
// console.log('Eat belongs to jacky : ', jacky.hasOwnProperty('eat'));

// ############################ Another Example #########################
console.log('############################ Another Example #########################');
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.draw = (width, height) => {
    console.log('Area : ', width * height);
    return 2;
}

let shape = new Rectangle(2, 4);
console.log('Shape height : ', shape.height);
console.log('Drawing shape : ', shape.draw(shape.width, shape.height));


