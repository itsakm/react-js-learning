//import { apikey } from "./util.js";
//import apikey from "./util.js";
// import * as util from "./util.js";
// console.log(util.apikey);
// console.log(util.abc)
// console.log("Hello");

//Chapter 17 - Revisiting Variable

// let userMessage = "Hello World!!!"; //variables
// console.log(userMessage);
// console.log(userMessage);

// const userMessage1 = "Hello World!!"; //constants - must not be redefined
// //userMessage1 can't be changed


//Chapter 18 - Revisiting Operators
// console.log(10+5)
// console.log("hello"+"world")
// console.log(10 === 6) //false
// console.log(10 === 10) //true
// console.log( 10 == 5)

//Chapter 19 - Revisiting Function & Parameters
// function greet() {
//     console.log("Inside Greet!!");
// }

// greet();

// function greet1(userName,msg) {
//     // console.log(userName);
//     // console.log(msg)
//     return "Hi, I am "+userName+" "+msg;
// }

// console.log(greet1("Avanish","Hello from Avanish"));



//Chapter 20 - Arrow Function
// export default function () {
//     console.log("Inside anonymous function")
// }

// () => {
//     console.log("Arrow function")
// }


//Chapter 21 - Object and Classes

// const user = {
//     name: 'Max',
//     age: 34,
//     greet() {
//         console.log("inside user and greet")
//     }
// };

// console.log(user.name)
// console.log(user.age)
// user.greet();

// class User
// {
//     constructor(name,age)
//     {
//         this.name = name;
//         this.age = age;
//     }
//     greet()
//     {
//         console.log('Hi')
//     }
// }

// const user1 = new User("Max",25);
// console.log(user1)


//Chapter 23 - Arrays and Arrays Method

// const hobbies = ["Sports","Cooking","Reading"]
// console.log(hobbies[0])

// hobbies.push("Working");
// console.log(hobbies)

// const index = hobbies.findIndex((item) => {
//     return item === 'Sports';
// })

// console.log(index)

// const editedHobbies = hobbies.map((item) => item+"!");

// console.log(editedHobbies)

//Chapter 24 - Destructuring
// const userNameData = ["Max", "Sch"];
const [firstName,lastName] = ["Max", "Sch"];
console.log(firstName);
console.log(lastName);



