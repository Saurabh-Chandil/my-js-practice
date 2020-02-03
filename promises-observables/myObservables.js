/************************* Single & Multiple values *************************
 * const promise = new Promise(resolve => {
    resolve(1);
    resolve(2);
    resolve(3);
    });
    promise.then(result => console.log(result)); // 1
    as promise emit single value only. If if is resolved means it is done. Whereas observables can emit multiple values.
 */

// %%%%%%%%%%%%%%%%%% https://itnext.io/javascript-promises-vs-rxjs-observables-de5309583ca2#7056 %%%%%%%%%%%%%%%%%%%%

/************************** Eager & Lazy **********************************
 * Promises are EAGER: the executor function is called as soon as the promise is created.
 * Observables are LAZY: the subscriber function is only called when a client subscribes to the observable.
 */

/************************** Non-Cancellable vs. Cancellable *******************
 * Once you “subscribed” to a promise with then, then the handler function that you pass to then will be called, no matter what. 
   You can’t tell a promise to cancel calling the result handler function once the promise execution has been started.
   
 * After subscribing to an observable with subscribe, you can cancel this subscription at any time by calling the 
   unsubscribe method of the Subscription object returned by subscribe. 
   In this case, the handler function that you passed to subscribe won’t be called anymore.
 */

/*************************** Multicast & Unicast ********************************
 * The executor function of a promise is executed exactly once (when the promise is created). 
   This means, that all the calls to then on a given promise object just “tap” into the ongoing execution of the 
   executor function and in the end get a copy of the result value. Therefore, promises perform multicast, 
   because the same execution and result value is used for multiple “subscribers”.

   The subscriber function of an observable is executed on each call to subscribe on this observable. 
   Therefore, observables perform unicast, because there is a separate execution and result value for each subscriber.
 */

 /************************** Asynchronous Handlers vs. Synchronous Handlers ****************
  * The handler functions of promises are executed asynchronously. That is, they are executed after all the code in the main 
    program or the current function has been executed. -- IMP.
    
    The handler functions of observables are executed synchronously. That is, they are executed within the flow of the 
    current function or the main program.
  */

/**
 * Make use of methods like next(), error(), complete(), subscribe(), unsubscribe() 
 */

var Rx = require('rxjs');

// let myObservable = new Rx.Observable((observer) => {
//     for(let i=1; i<5; i++) {
//         observer.next(i);
//     }
// });
// myObservable.subscribe((res) => {
//     console.log(res);
// });

let yourObservable = new Rx.Observable((observer) => {
    setTimeout(() => {
        console.log("Async task done");
        observer.next(1);
        observer.next(2);
        //observer.complete();
        observer.error();
    }, 2000);
});

let subscription = yourObservable.subscribe((fulfilled) => console.log("Handler : ", fulfilled), (error) => {
    console.log('Error');
}, (complete) => {
    console.log('Complete');
});
//subscription.unsubscribe();
// This prints (after 2 seconds): Async task done

