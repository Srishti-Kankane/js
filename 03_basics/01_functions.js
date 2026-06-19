function sayMyName(){
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("U");
}

// sayMyName()

// function addNumbers(num1, num2){
//      console.log(num1 + num2);
   
// }

// console.log(addNumbers(4,3));

function addNumbers(num1, num2){
    // let result =   num1 + num2
    // return num1 + num2
}
const result = addNumbers(3,5)
// console.log("Result: ", result);


function loginUserMessage (username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("srishti"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
 
