// singleton

// object literals
//Objects.create 

const JsUser = {
    name: "Himanshu",
    age: 23,
    location: "jaipur",
    email: "himas@gmial.com",
    isLoggedIn: false

}
JsUser.age
console.log(JsUser.age)
//console.log(JsUser.["email"])

JsUser.email = "himanshu@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "himashu@gmail.com"
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello js user");
}
// JsUser.greetingTwo = function(){
//     console.log(`Hello js user, ${this.name}`);
// }

console.log(JsUser.greeting());
//console.log(JsUser.greetingTwo());