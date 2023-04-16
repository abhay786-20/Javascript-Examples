/* var c = document.getElementById("dom");
c.innerText = "Hello";
console.log(c.innerText);
var z = document.getElementById("ii").innerHTML;
console.log(z);

document.getElementById("gfg").innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias error omnis dolor soluta inventore ut. Aperiam sit, atque dolorum quisquam deserunt ratione maxime aut commodi incidunt, voluptas fugiat itaque eligendi!';
console.log(document.getElementById("gfg")); */

/* var c = document.getElementById("intro");
console.log(c);

var cc = c.children;
console.log(cc);
for(var i = 0; i<cc.length; i++){
    cc[i].innerHTML = "Hello, I am Abhay ";
}
 */

// Creating a dynamic element 

/* var c = document.getElementById("intro");
console.log(c);
var cc = c.previousElementSibling;
console.log(cc); */
/* 
let c = document.getElementById("intro");
console.log(c);
/* let cc = c.innerHTML;
console.log(cc); */
/* let h1 = document.createElement('h1');
c.appendChild(h1);
let text = document.createTextNode("This is h1 tag");
h1.append(text);
h1.className = "try pi";
h1.id = "idd";
let h2 = document.createElement('h2');
//let txt = document.createTextNode("This is h2 tag");
//h2.appendChild(txt);
h2.textContent = " Text Added"

let cd = document.body;
cd.appendChild(h2); 
 */ 
/* var e = document.getElementById("intro");
console.log(e);
var  f = e.firstElementChild;
console.log(f);
console.log(f.textContent);
 */

//    Insert before 

/* let ul = document.getElementById("ll");
let li = document.createElement("li");
li.textContent = "List5";
let pos = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;
ul.insertBefore(li,pos)

let ull = document.getElementById("intro");
let bd = document.body;
let h2 = document.createElement("h2");
h2.textContent = "This is h2 tag";
bd.insertBefore(h2,ull);

 */

// Removing  the element 

/* let ull = document.getElementById("ll");
let cd = ull.firstElementChild.nextElementSibling.nextElementSibling;
ull.removeChild(cd);
 */

// Clone 
/* 
let cd = document.getElementById("ll");
let elm = cd.cloneNode(true);
console.log(elm);
document.body.appendChild(elm);
 */

// Replace 

let cd = document.getElementById("ll");
let li = document.createElement("li");
li.textContent = "This is new list";

let rp = cd.firstElementChild.nextElementSibling;
cd.replaceChild(li,rp);
 

// Insert Adjacent Element

/* 
let elm = document.getElementById("intro");
console.log(elm);
let html = document.createElement("h1");
html.textContent = " This is me";

elm.insertAdjacentElement('afterbegin',html);
 */

// Change Attribute
/* var bt = document.getElementById("btn");
bt.removeAttribute("name");
var cd = bt.hasAttribute("name");
console.log(cd);
 */

//   Inline Style 

/* var c = document.getElementById("btn");
c.style.cssText = "background-color : green;color : white";

 */
// Know the existing style 
/*
let bt = document.getElementById("btn");
let css = getComputedStyle(bt);
console.log(css);
*/