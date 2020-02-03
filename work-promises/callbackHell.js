function getPotato(callback) {
    console.log('Getting fresh potato'); callback('potato'); }
function getPotatoFry(ingredient, callback) {
    console.log('Frying the potato'); callback('fry potato'); }
function getBread(callback) {
    console.log('Getting freshly baked bread'); callback('fresh bread'); }
function prepareBurger(ingredientOne, ingredientTwo, callback) {
    console.log('Now preparing burger');
    callback('burger ready to serve');
}

let burger = finalBurger => {
    getPotato((resPotato) => {
        console.log('Res in getPotato : ', resPotato);
        getPotatoFry(resPotato, (resPotatoFry) => {
            console.log('Res in getPotatoFry : ', resPotatoFry);
            getBread((resBread) => {
                console.log('Res in getBread : ', resBread);
                prepareBurger(resPotatoFry, resBread, (prepareBurgerStatus) => {
                    console.log('Status of my burger : ', prepareBurgerStatus);
                    finalBurger(prepareBurgerStatus);
                });
            })
        });
    });
};

burger((myBurger) => {
    console.log('Is burger ready : ', myBurger);
});