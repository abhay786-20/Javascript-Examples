// AddeventListner
/*
let btn = document.getElementById("btn");
btn.addEventListener('click',myfun);
function myfun(){
    alert("Button is clicked");
}
*/

//   window load and load event
/*
window.addEventListener('keydown' , checkey);
function checkey(event){
    console.log(event.code);
}
*/
/*
window.addEventListener('load' , function(){
    console.log("Fully  Created");
});
*/

// Scroll 
/*
window.addEventListener('wheel', function(e){
    if(e.deltaY<0){
        console.log("Scrolling up....")
    }
    if(e.deltaY>0){
        console.log("Scrolling down....")
    }
});
*/

//  Form event 
/*
let x = document.getElementById("myTxt");
x.addEventListener('focus',myfocus);
x.addEventListener('blur',myblur);
x.addEventListener('change',mychange);

function myfocus(){
    x.style.cssText = " border:2px solid black;border-radius:10px;color:green;";
}

function myblur(){
    x.style.cssText = " border:2px solid black;";
}

function mychange(){
    console.log(this.value);
}

*/

// Event Bubbling and Capturing 

/*
let d = document.getElementById("mydiv");
let b = document.getElementById("btn");
 
 b.addEventListener('click',btnclick);  - bubbling  // default false
  
b.addEventListener('click',btnclick);

//  d.addEventListener('click',divclick);  - bubbling

d.addEventListener('click',divclick);

// document.body.addEventListener('click',bodyclick);  - bubbling

document.body.addEventListener('click',bodyclick);
function btnclick(e){
    console.log("button clicked");
    console.log(e);
    e.stopPropagation();
}
function divclick(){
    console.log("div clicked");
}
function bodyclick(){
    console.log("Body clicked");
}

*/
//Prevent default
/*
let x = document.getElementById("hreff");
x.addEventListener('click',predef);
function predef(e){
    console.log("Clicked !");
    e.preventDefault();
}
*/
// BOM
/*
 console.log(window.outerHeight);
 console.log(window.innerWidth);
 */

 /*
 let x = document.getElementById("btn");
 let xx = document.getElementById("btnn");
 let url = "https://www.google.com";
 let urll = "https://www.yahoo.com";
 let features = "  height=500,width = 500, background-color = red";
 xx.addEventListener('click',function(){
    window.open('https://www.yahoo.com', 'google',features);
 });
 x.addEventListener('click',function(){
    window.open(url, 'google',features);
 });
 */

 // Set - timeout and Interval

 //let st = setInterval(myfun,3000);
/*
 function myfun(){
    alert("You are here");
 }
 // clearTimeout(st);
*/

// Location Object 
/*
console.log(location.href);
console.log(location.pathname);
console.log(location.protocol);
console.log(location.port);
console.log(location.host)

function myfun(){
   // window.location = "https://www.google.com";
   //location.href = "https://www.google.com";
   // location.replace("https://www.google.com");
   location.reload();
}
*/

// Navigator  to detect the browser information

console.log(navigator.appName);
console.log(navigator.appCodeName);
console.log(navigator.appVersion);
console.log(navigator.cookieEnabled);
console.log(navigator.userAgent);
console.log(navigator.platform);
console.log(screen.width);
console.log(screen.availHeight);
console.log(screen.height);
console.log(screen.colorDepth);
console.log(screen.orientation);