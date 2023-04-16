/*
//*** Hoisting in JavaScript
x=10
console.log(x);
x = 7
console.log(say);
var x;
var say = ()=>{
    console.log("Hello");
}
console.log(say());
*/
// Function Invocations
/* 
var x = 1;
console.log(x);
a();
b();


function a(){
     x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}

console.log(x); */
// Closures

/* function a(){
    var x = 7;
    function b(){
        console.log(x);
    }
    b();
}
a();
 */

/* 
function a(){
    var x = 7;
    function b(){
        console.log(x);
    }
    return b;
}
var c = a();
console.log(c);
c();


 */// Corner Case 

/* function a(){
    var x = 7;
    function b(){
        console.log(x);
    }
    x = 100;
    return b;
}
var c = a();
console.log(c);
c();
 */

// Set Interval / Timeout and closure
/*
var z = ()=>{setInterval(function(){
    console.log("Hello")
},2000)};
z();
*/
//  Application of Closure
/*
function x(){
    
    for(let i=1; i<=5; i++){
        setTimeout(()=>{         // a ka refrence store kr raha h a last m 6 ho jaa raha for loop k upar h toh var and const dono 
                                 // let bock     scope h toh hamesha ek new variable refrence f=dega
            console.log(i);
        },i*1000);
       
    }
}
x();

*/

// Function Counter 
/*
function counter(){
   var a = 0;
   /*function increment(){
      a++;
      console.log(a);
   }
   return increment;
   // now using constructor and destructor

   this.increment = function(){
     a++;
     console.log(a);
   }

   this.decrement = function(){
    a--;
    console.log(a);
   }
}

var cnt = new counter();

cnt.increment();
cnt.increment();
cnt.increment();

cnt.decrement();
*/

// First Class Function 

// Function Statement
/*
function a(){
    console.log("Console log a");
}
*/

// Function Expression 
/*
var z = function xyz(){
    console.log("Abhay")
};
z();
xyz();
*/

// Higher order function 
/*
const radius = [1,2,3,4];

const area = function (radius){
  return Math.PI*radius*radius;
}

const circumfrence = function (radius){
    return 2*Math.PI*radius;
  }

  const daimeter = function (radius){
    return 2*radius;
  }
  
const calculate = function(radius,logic){
    const output = [];
    for(let i =0;i<radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius, area ));


console.log(calculate(radius, circumfrence ));


console.log(calculate(radius, daimeter ));
*/