// From ZS

var async =  require('async');
async.waterfall([
  (done) => {
    console.log('start!');

    done(null, 'Value from step 1'); // <- set value to passed to step 2.
  },
  (step1Result, done) =>{
    console.log(step1Result);
    console.log('Second step');
    //done(null, 'Value from step 2'); // <- set value to passed to step 3
    return done(null);
  },
  (step2Result, done) => {
    console.log(step2Result);
    console.log('Third step');
    //return done('Breaked'); // <- no value set for the next step.
  }
],
(err) => {
  if (err) {
    console.log('err:', err);  
    //throw new Error(err);
  } else {
    console.log('No error happened in any steps, operation done!');
  }
});