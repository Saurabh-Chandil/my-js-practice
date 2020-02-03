console.log("Will do work on promises");

let myPromise = new Promise((resolve,reject) => {
    a = 2;
    if(a == 1) {
        setTimeout(() => {
            resolve('Saurabh');
        }, 5000);
        console.log('Inside If Block');
    } else {
        reject('Chandil');
    }
});

let checkingPromise = () => {
    myPromise.then(res => {
        //console.log('Promise is resolved : ', res);
        return res;
    }).then(resOne => {
        console.log('Chaining : ', resOne);
    }).catch(errorRes => {
        console.log('Promise is rejected : ', errorRes);
    });
}

checkingPromise();