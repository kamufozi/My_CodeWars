
function sayHi(callback){
    const startTime = performance.now();
    setTimeout(()=>{
        callback();
        const endTime = performance.now();
        const delay = endTime - startTime;
        console.log(`The callback took ${delay} milliseconds.`);  
    }
     , 2000
    )

}
function hi(){
    console.log("Hi little simz");
    // const start=performance.now();
    // let end = performance.now();
    // let meanwhile= end-start;
    // console.log(meanwhile);
}
sayHi(hi);

function counter(callback){
    return callback();
}
function count(){
    for(let i=1;i<6;i++){
    setTimeout(()=>{
        console.log(i)
    },1000)}
}
counter(count);

function formatName(firstName, lastName, callback) {
    // Your code here
}
function firstAndLast(firstName,lastName){
    console.log(`${firstName} ${lastName}`)
    return `${firstName} ${lastName}`
}
function lastCommaFirst(firstName,lastName){
    console.log(`${lastName.toUpperCase()}, ${firstName}`)
    return `${lastName.toUpperCase()}, ${firstName}`
}
function signature(firstName,lastName){
    console.log(`${firstName[0]}. ${lastName}`)
    return `${firstName[0]}. ${lastName}`
}

// Example usage:
console.log(formatName("John", "Doe", firstAndLast("John","Doe")));
console.log(formatName("John", "Doe", lastCommaFirst("John","Doe")));
console.log(formatName("John", "Doe", signature("John","Doe")));
// Expected outputs (with different callbacks):
// "John Doe"
// "DOE, John"
// "J. Doe"