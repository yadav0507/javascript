const user ={
    username: "himashu",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);
        
    }

} 
// console.log(this);
// user.welcomeMessage()
// user.username = "sam";
// user.welcomeMessage()

// function chai(){
    
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "him"
    console.log(this);
}
chai()


// const addTwo = (num1, num2) =>  (num1 + num2)
// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) => ({user: "himashu"})
console.log(addTwo(3,4))


// const array = [2,3,56,78]

// mtAtt.array.forEach(element => {
    
// });