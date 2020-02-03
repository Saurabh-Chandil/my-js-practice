function getPotato() {
    console.log('Getting fresh potato'); 
    return 'fresh potato'; 
}
function getPotatoFry(ingredient) {
    console.log(`Got ${ingredient}. Ready to fry.`); // ES6 - Template Literal 
    return 'fried potato';
}
function burgerPrepare(bun, potato) {
    //considering we have bun already baked.
    console.log(`Making burger with baked ${bun} and ${potato}`);
    return 'burger';
}
let makeBurger = async() => {
    try {
        const freshPotato = await getPotato();
        console.log('Putting potato to fry');
        const friedPotato = await getPotatoFry(freshPotato);
        const myBurger = await burgerPrepare('bun', friedPotato);
        return myBurger;        
    } catch (error) {
        console.log('Error : ', error);
    }
};
makeBurger().then((finalResponse) => { console.log('Final Response : ', finalResponse) });