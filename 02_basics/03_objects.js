// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Srishti",
    "full name": "Srishti Kankane",
    [mySym]: "mykey1",
    age: 25,
    location: "Patna",
    email: "srishtikankane@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "sk@gmail.com"
// console.log(JsUser.email);
// Object.freeze(JsUser)
// JsUser.email = "sk@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Helllo");
}
JsUser.greetingTwo = function(){
    console.log(`Hello, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

