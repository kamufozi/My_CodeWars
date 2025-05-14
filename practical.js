async function fetchFirstUserPostsWithRetries(){
    let url = 'https://jsonplaceholder.typicode.com/users';
    let pUrl= 'https://jsonplaceholder.typicode.com/posts?userId={userId}';
    let user;
    let posts=[];
    try{
    let parsed; 
    let pParsed;   
    for (let i=0; i<3;i++){
     let response=await fetch(url);
     parsed=await response.json();  
    }
    for (let i=0; i<3;i++){
        let response=await fetch(pUrl);
        pParsed=await response.json();  
       }
    console.log(pParsed);   
    user=parsed[0];
    console.log(user);
    }
    catch(err){
        console.log(err);
    }
  
}
fetchFirstUserPostsWithRetries();