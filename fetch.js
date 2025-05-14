const url = 'https://api.github.com/users/varma-cephas'
async function show(){
 const data = await fetch(url);
 const val= await data.json();
    console.log(val);
}
show();