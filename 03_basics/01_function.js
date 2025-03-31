


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
        //console.log("please enter a username");
        return
    }
    return `${userName} just logged in`

}
//console.log(loginUser());


function calculateCartPrice(val1, val2, ... num1){ // ... rest operator
    
    return num1

}
//console.log(calculateCartPrice(2,345,7654))



const user = {
    userName : "himanshu",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price} `)
}

// handleObject(use)
handleObject({
    username: "samm",
    priceL 999
})

const myNewArry = [200, 300, 100, 900]
function retrunSecondValue(getArry){
    return getArry[1]
}




