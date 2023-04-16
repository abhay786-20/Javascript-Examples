/* 

//  Getter and Setter

let person = {
    name :'Abhay',
    age : 21,
    sex : 'M',
    /* getName : function(){
        return this.name.toUpperCase();
    } 

    get getName(){
        return this.name.toUpperCase();
    },
    set setName(n){
        this.name = n.toUpperCase();
    }
}

console.log(person.name);
console.log(person.getName);

person.setName = "Siddharth";
console.log(person); */

// Object Constructor Function

/*
function Student(first,last,age,cls){
     this.firstName = first;
     this.lastName = last;
     this.age = age ;
     this.class = cls;
}

let Student1 = new Student('Abhay','Sharma',21,5);
let Student2 = new Student('Siddharth','Sharma',4,1);
console.log(typeof(Student1));
console.log(Student1);
console.log(typeof(Student2));
Student2.nationality = 'Indian';
Student2.fullName = function(){
    return this.firstName+" "+this.lastName;
}
console.log(Student2)
Student.prototype.nationality = 'Indian';
console.log(Student1);
console.log(Student1.nationality);

*/

// Nested Objects 

var user = {
    id : 101,
    email: 'abc@gmail.com',
    personalInfo : {
        name : "Abhay Sharma",
        address : {
            street : "sarainandan",
            city : "Delhi"
        }
    }
}

console.log(user);