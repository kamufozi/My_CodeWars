// const url = 'https://api.github.com/users/varma-cephas'
// async function show(){
//  const data = await fetch(url);
//  const val= await data.json();
//     console.log(val);
// }
// show();

// async function test() {
//     console.log('1');
//     await Promise.resolve().then(()=>console.log("I am resolved"));
//     console.log('2');
// }

// console.log('3');
// test();
// console.log('4');
// function times2(x){
//   return x*2;
// }
// async function processItems(items) {
//     items.forEach(async (item) => {
//         await times2(item);
//         console.log(`Processed ${item}`);
//     });
//     console.log('All items processed');
// }
// processItems([1,2,3,4,5])
// async function fetchMultiple() {

//     const urls = ['https://api.github.com/users/varma-cephas', 'https://api.github.com/users/kamufozi', 'https://api.github.com/users/cedrickhab'];
//     const promises = urls.map(url => fetch(url));
//     const results = await Promise.all(promises);
//     // for (let url of urls) {
//     //   let response=await fetch(url);
//     //     results.push(await response.json());
//     // }
//     console.log(results);
//     return results;
// }
// fetchMultiple();
// setTimeout(()=>console.log(fetchMultiple()),4000);

// Your implementation here
// async function retryOperation(operation, maxRetries = 3) {
//     // Complete this function
//     try{
//       for(let i=1; i<=maxRetries; i++){
//         await operation;
//       }
//     }
//     catch{
//       console.error(Error);
//     }
// }
// async function retryOperation(operation, maxRetries = 3) {
//     let lastError;
    
//     for(let i = 1; i <= maxRetries; i++){
//         try {
//             console.log(`Attempt ${i}/${maxRetries}`);
//             const result = await operation(); // Call the function
//             return result; // Return on success
//         }
//         catch(error) {
//             lastError = error;
//             console.log(`Attempt ${i} failed:`, error.message);
            
//             // Don't wait after the last attempt
//             if (i < maxRetries) {
//                 const delay = Math.pow(2, i) * 1000; // Exponential backoff
//                 console.log(`Waiting ${delay}ms before retry...`);
//                 await new Promise(resolve => setTimeout(resolve, delay));
//             }
//         }
//     }
    
//     // If we get here, all attempts failed
//     throw lastError;
// }
