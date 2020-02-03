function getPotato() {
    console.log('Getting fresh potato'); 
    return new Promise((resolve, reject) => {
        let value = 1;
        if(value == 1) {
            resolve('fresh potato');
        } else {
            reject('potato not available');
        }
    }); 
}
function getPotatoFry(ingredient) {
    console.log('Frying the potato'); 
    // considering the potatoes are fried
    return new Promise((resolve, reject) => {
        resolve('fried potato');
    });
}

// function getBread(callback) {
//     console.log('Getting freshly baked bread'); 
//     callback('fresh bread'); 
// }

// function prepareBurger(ingredientOne, ingredientTwo, callback) {
//     console.log('Now preparing burger');
//     callback('burger ready to serve');
// }

let makeBurger = () => {
    return getPotato().then((resPotato) => {
        console.log('Fresh potato available : ', resPotato);
        return getPotatoFry(resPotato);
    }).then((resFriedPotato) => {
        console.log('Fried potato available : ', resFriedPotato);
        return resFriedPotato;
    }).catch((resError) => {
        console.log('Cant make the burger');
        return 'Burger not ready';
    });
};
makeBurger().then((finalResponse) => { console.log('Final Response : ', finalResponse); });