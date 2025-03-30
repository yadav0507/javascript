const tinderUser = new Object() // singleton object
const tinderUser2 = {}           // non singleton object

tinderUser.id = "123csx"
tinderUser.name = "samm"
tinderUser.isLoggedIn = "false"

// const regularUser = {
//     email: "some@gmail.com",
//     fullName: {
//         userNmae: {
//             firstName: "Himanshu",
//             lastNmae: "yadav",
//         }
//     }
// }


// //console.log(regularUser.firstName)

// const obj1 = {1: "a", b: "b"}
// const obj2 = {3: "c", 4: "d"}

// //const obj3 = {obj1, obj2}
// //const obj3 = Object.assign({} ,obj1, obj2)
// //console.log(obj3)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3)

// const users = [
//     {
//         id: 1,
//         email: "him@gmail.com"
//     },
//     {
//         id: 1,
//         email: "him@gmail.com"
//     },
//     {
//         id: 1,
//         email: "him@gmail.com"
//     },
// ]

// users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))





const course = {
    courseName:  "js in english",
    price : "99",
    courseInstructor: "hitesh"

}

const {courseInstructor : instructor} = course
console.log(instructor)



// {
//     "name": "him",
//     "courseName": "js",
//     "price": "free"
// }































