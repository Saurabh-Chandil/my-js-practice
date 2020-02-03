/**
 * Youtube Video - https://www.youtube.com/watch?v=3AKh0-PDsMw
 * Diff bw object creation using function cons and Object.create is that objects created from Object.create 
 * inherits directly from object which we pass as argument whereas in cons func pattern objects are created from constructor blueprint.
 * 
 * Object.create pattern is used to build complex prototype chain and it gives flexibility to directly specify 
 * which object will be prototype of a newly build object.(Everything in JS is object)   
 * 
 * Prototype of variable -> __proto__
 * Prototype of function -> prototype
 */

// ########################## Create objects using function constructor ################################# 
/*
var john = {
    name: 'John',
    yearOfBirth: '1990',
    job: 'Developer'
}
var Person = function(name, yearOfBirth, job) { // arrow function will not work here.
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    //this.job = job;
    // arrow function will work here if we put some function
    // this.calculateAge = function() {
    //     console.log('Age of candidate : ', 2020-this.yearOfBirth);
    // }
}
// Person.diet = () => {
//     console.log('Veg Diet');
// }

var john = new Person('John', 1990, 'Developer'); // This is called instantiation.
let jane = new Person('Jane', 1969, 'Designer');
let mark = new Person('Mark', 1948, 'Retired');

// Now using prototypes
Person.prototype.calculateAge = function() {    // arrow function will not work here.
    console.log('Age of candidate : ', 2020-this.yearOfBirth);
}

Person.prototype.job = 'Developers';

console.log('John Object : ', john); 
john.calculateAge(); 
console.log('Job of John : ', john.job);
//john.diet();

console.log('Jane Object : ', jane); 
jane.calculateAge(); 
console.log('Job of Jane : ', jane.job);    
//jane.diet();

console.log('Mark Object : ', mark); 
mark.calculateAge(); 
console.log('Job of Mark : ', mark.job);
//mark.diet();

*/
// ########################### Create objects that inherit from prototype(Object.create) ############################

var personProto = {
    calculateAge: () => {
        console.log('Age of candidate : ', 2020-this.yearOfBirth);
    }
}

var animalProto = {
    'diet' : 'Flesh' 
}

//var john = Object.create(personProto);
var john = Object.create(animalProto);
john.name = 'John';
john.yearOfBirth = 1990;