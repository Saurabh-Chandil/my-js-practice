// Understanding promises.

function gatherHardware() {
    console.log('Gather hadware');
    return new Promise((resolve, reject) => {
        resolve('MacParts');
    });
}

function gatherSofwareInstallers(hadware) {
    console.log('Arrange software for gathered : ', hadware);
    return new Promise((resolve, reject) => {
        resolve('MacPartsAndsw');
    });
}

function assembleHardware(baseMachine) {
    console.log('Assembly Line. We got : ', baseMachine);
    return new Promise((resolve, reject) => {
        //resolve('assembledParts');
        reject('AssemblyNotWorking');
    });
}

function installSoftware(assembledMachine) {
    console.log('Install software in : ', assembledMachine);
    return new Promise((resolve, reject) => {
        resolve('completeMachine');
    });
}

let laptop = () => {
    return gatherHardware().then((resOne) => {
        console.log('First then : ', resOne);
        return gatherSofwareInstallers(resOne);
    }).then((resTwo) => {
        console.log('Second then : ', resTwo);
        return assembleHardware(resTwo);
    }).then((resThree) => {
        console.log('Third then : ', resThree);
        return installSoftware(resThree);
    }).catch((err) => {
        console.log('Machine cant be completed : ', err);
        return 'Incomplete machine';
    });
}

// laptop().then((finalResponse) => {
//     console.log('Final product : ', finalResponse);
// });


// ************************* Now breaking the chain *************************

// ####################### Not able to fully understand this concept. For more clarification goto https://stackoverflow.com/questions/32032588/how-to-return-from-a-promises-catch-then-block
function functionOne() {
    console.log('One');
    //throw new Error('breaking');
    return new Promise((resolve, reject) => {
        //resolve('ONE');
        reject('NOOO');
    });
}
function functionTwo() {
    console.log('Two');
    return new Promise((resolve, reject) => {
        resolve('TWO');
    });
}
function functionThree() {
    console.log('Three');
    return new Promise((resolve, reject) => {
        resolve('THREE');
    });
}

try {
    Promise.resolve()
    .then(functionOne()).catch((funcOneErr) => {
        console.log('First catch');
    }).then(functionTwo()).catch((funcTwoErr) => {
        console.log('Second catch');
    });

} catch (error) {
    console.log('My problem : ', error);
}