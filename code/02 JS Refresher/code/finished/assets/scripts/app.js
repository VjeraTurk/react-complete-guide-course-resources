// import { apiKey, abc } from "./util.js"; // import the variable
// import { apiKey, abc as content} from "./util.js"; // use as to add alias
// import apiKey from "./util.js"; // use with export default
// console.log(apiKey);
// import * as util from "./util.js";
// console.log(util.apiKey);
// console.log(content);

// let userMessage = "Hello world!";
// const userMessage = "Hello world!"; // must not be re-assigned

// console.log(userMessage);
// console.log(userMessage);

// console.log(10/5);
// console.log(10+5);

// console.log("Hello" + " " + "World");
// if ( 10 === 10) { // triple =
//     console.log("works");
// }

/*
function greet(userName, message = "Hello") { // default
    console.log(userName);
    console.log(message);

    return "Hi, I am" + userName + ". " + message;
}

greeting1 = greet("Max")); // calling or invoking a function
greeting2 = greet("Manuel", "Hello, what's up?");

console.log(greeting1);
console.log(greeting2);
*/
// anonymous functions ( no name )
// export default function() {}
/*
export default (userName, message) => {
    return userName + " " + message;
}
*/

// if you ave exactly 1 parameter, you can omit the ()
// if your function just returns "return" can be omitted
// number => { number * 3 };
// number => {number > 3 ? number : 3 };

/*
const user = {
    name : "Max",
    age:  34,
    greet() {
        console.log("Hello!");
        console.log(this.name);
    }
}
user.greet();

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hi!");
    }
}

let user1 = new User("Manuel", 20);
user1.greet();
*/

/*
const hobbies = ["Sports", "Cooking"];
console.log(hobbies[0]);

hobbies.push("Working out");
console.log(hobbies);

const index = hobbies.findIndex(item => item === 'Sports');
console.log(index);

let lowercaseHobbies = hobbies.map((item)=> {return item.toLowerCase()});
console.log(lowercaseHobbies);
*/

// const [firstName, lastName] = ["Vjera", "Turk"];

/*
const { name : userName, age }  = {
    name: "Max",
    age: 34
}
console.log(userName);
*/

// Spread operator
// const newHobbies = ["Reading"];
// const mergeHobbies  = [ ...hobbies, ...newHobbies];
/*
const extendedUser = {
    isAdmin  : true,
    ...user
}
*/
/*
const password  = prompt('Your password');
for ( const hobby of hobbies) {
    console.log(hobby);
}
*/

/*
function handleTimeout() {
    console.log("Timed out!")
}

function handleTimeout2() {
    console.log("Timed out...again!")
}


setTimeout(handleTimeout, 2000)
setTimeout(handleTimeout2, 3000)
setTimeout(()=>{
    console.log("More timng out ...")
}, 4000)
*/

/*
function greeter(greetFn){
    greetFn()
}

greeter(() => console.log("Hi"))
*/