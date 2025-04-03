// Immediately Invoked Function Expression (IIFE)


(function chai(){
    // named iife
    console.log(`db connected`);
})
();


( (name) => {
    // unnamed iife
    console.log(`db connexted ${name}`);
})
('himanshu')