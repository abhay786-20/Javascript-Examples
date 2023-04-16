/* let str = "Abhay Sharma";
console.log(str);
let greet = `Hi ${str}`;

document.write(greet.length);

let st = "Abhay is \" good";
let s = " Abhay is a good boy.He is great person  ";
console.log(st);
console.log(st.concat(str));
console.log(str.substr(0,5));
console.log(str.substring(0,3));
console.log(s.indexOf("is"));
console.log(s.lastIndexOf("is"));
console.log(s);
console.log(s.trim());
console.log(s.trimEnd());
console.log(s.replace('Abhay','Harsh'));

let book = [1,2,3,4];
console.log(book);
book.push(5);
console.log(book);
book.unshift(0);
console.log(book);
book.pop();
console.log(book);
book.shift();
console.log(book);
book.splice(1,2);
console.log(book);

console.log(s.split(' '));
 */


// Immediately Invoked Function 
/*
(function(){


let msg = "Hello third party here";

function show(){
    alert(msg);
    console.log(msg);
}
show();
}
)();
*/
/* 
let person = {
    'first Name':'Abhay',
    'last Name':'Sharma',
    age:21,
    sex:'M',
    sayHello (){
      alert("Hello !");
    }
}

for(let key in person){
    console.log(key + " "+person[key]);
}
person.sayHello(); */

// Maths Object 
var x = Math.floor(Math.random()*(6-1+1))+1;

console.log(x);