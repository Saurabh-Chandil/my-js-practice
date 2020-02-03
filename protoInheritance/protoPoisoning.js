/**
 * https://medium.com/intrinsic/javascript-prototype-poisoning-vulnerabilities-in-the-wild-7bc15347c96
 */

 // 1
const myProto = { a: 1 };
const myObj = { b: 2 };
Object.setPrototypeOf(myObj, myProto);

myObj.__proto__.c = 3;

// 2
const plainObj = {
    __proto__: { a: 1 },
    b: 2
};
const jsonString = `{
    "__proto__": { "a": 1 },
    "b": 2
}`;
const parsedObj = JSON.parse(jsonString);
const plainObjProto = Object.getPrototypeOf(plainObj);
const parsedObjProto = Object.getPrototypeOf(parsedObj);

// 3
const otherObj = `{
    "user": {
      "__proto__": {
        "admin": true
      }
    }
}`;
const parsedOtherObj = JSON.parse(otherObj);  
