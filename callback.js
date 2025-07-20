
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