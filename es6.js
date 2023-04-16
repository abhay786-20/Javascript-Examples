/*
let per = {};
console.log(per);
let person = {
    name : " Abhay "
};
console.log(person);
*/
// Class 
/*
class Person{

     constructor(n,a){
        this.name = n;
        this.age = a;
     }

     sayHi() {
        console.log("Hii");
     }
     static sayHello(){
        console.log("Hi Gabbar");
     }
}
let per = new Person("Abhay",21);
console.log(per);
console.log(per.name);
console.log(per.age);
per.sayHi();
Person.sayHello();
*/

//  Inheritance
/*
class emp{
    constructor(n){
        this.name = n;
    }
    msg(){
        console.log("hi there");
    }
}

class manager extends emp{
     constructor(n,dep){
        super(n);
       this.department = dep;
    } 
    info(){
        super.msg();
        console.log(this.name);
    }
}
class admin extends manager{
    constructor(n,dep,a){
        super(n,dep);
        this.add = a;
    }
}

let mng = new admin("Abhay","it","add");
console.log(mng);
console.log(mng.info());

*/

// Private public protected
/*
class emp{
    #name = " ";
    constructor(n){
        this.#name = n;
    }
    getname(){
        console.log(this.#name);
    }
}

let Emp1 = new emp("Abhay");
console.log(Emp1.getname());

*/

// Mixing 

/*
let useFul = {
    sayHi(){
        console.log("Hi Hi");
    },
    saybye(){
        console.log("Bye ");
    }
}
class user{
    constructor(){
            this.name = "Abhay";
    }
}

let usr1 = new user();
Object.assign(user.prototype,useFul);   // appending object function in  class

console.log(usr1.sayHi());
console.log(usr1.saybye());
console.log(usr1);
*/

// Arrow Function 

/*
function sum(a,b){
    return a+b;
}

let sumA = (a,b)=>{
    return a+b;
}
let sumB = a => 2*a*a;

console.log(sum(2,3));
console.log(sumA(2,3));
console.log(sumB(3));
*/
// CallBacks
/*
function sayHello(){
    console.log("Hello");
}
function say(){
    console.log("Hello !!");
}

function sum(a,b,callback){
    
    console.log(a+b);
    callback();
}

let a = 10;
let b = 20;
sum(a,b,sayHello);
sum(15,15,say);
*/

// Map 
/* 
console.log(123)
let arr = [1,2,3,4,5];

let arr1 = arr.map((val)=>{
    return val%2;
})
console.log(arr1); 

 */
/* 
function countFreq(arr, n)
{
	var mp = new Map();

	
	for (var i = 0; i < n; i++)
	{
		if(mp.has(arr[i]))
			mp.set(arr[i], mp.get(arr[i])+1)
		else
			mp.set(arr[i], 1)
	}

	var keys = [];
	mp.forEach((value, key) => {
		keys.push(key);
	});
	//keys.sort((a,b)=> a-b);
	
	keys.forEach((key) => {
		
		document.write(key + " " + mp.get(key)+ "<br>");
	});
}

var arr = [10, 20, 20, 10, 10, 20, 5, 20];
var n = arr.length;
countFreq(arr, n);
 */

// Filter 

let arr = [10, 20, 20, 10, 1, 20, 5, 20];

let arr2 = arr.filter((val)=>{
    return val%2;
})
console.log(arr2);


// document Cookie
/*
document.cookie = "item = Milk";
localStorage.setItem = ('FirstName = Abhay');
*/

// JSON Stringify
/*
let data =  `{
    "name" : "Abhay",
    "age" : 21,
    "sex" : "M",
    "is_student" : true,
    "passport" : null,      
    "p_lang" : ["C","C++","Python"],
    "address" : {
        "city" : "Varanasi",
        "state" : "Uttar Pradesh",
        "pincode" : 221010
    }
}`;
// JSON to object

let dobject = JSON.parse(data);
console.log(dobject.name);
*/

//JavaScript to Stringify
/*

let dataa = {
    name : "Abhay",
    age : 21,
    sex : "M",
    is_student : true,
    passport : null
}  
// Object to Stringify
let da = JSON.stringify(dataa);
console.log(da);


*/