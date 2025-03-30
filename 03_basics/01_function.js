


// function sayMyName(){
//     console.log('H')
// console.log("i")
// console.log('I')
    
// }

//sayMyName()

// function addTwoNumber(num1, num2){ // parameters

//     console.log(num1 + num2)

// }

function addTwoNumber(num1, num2){ // parameters

    // let result = num1 + num2
    // console.log("hitesh")
    return num1 + num2
    

}

const result = addTwoNumber(2, 5) // arguments 
//console.log("result: ", result );

function loginUser(userName = "samm"){
    if(!userName)
    {
        console.log("please enter a username");
        return
    }
    return `${userName} just logged in`

}
console.log(loginUser());

