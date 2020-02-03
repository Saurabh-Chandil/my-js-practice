function testingPureCB(value, callback) {
    console.log('Value : ', value);
    callback();
}

// myCallback = () => {
//     console.log('This is callback in myCallback');
// }

testingPureCB('Purity', ()=> {
    console.log('This is callback');
});