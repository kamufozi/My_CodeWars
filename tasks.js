// //task 1
// async function getData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     const data = await response.json();
//     console.log(data);
//   }
// //task 2  
// async function waitAndPrint() {
//     await new Promise(resolve => setTimeout(resolve, 3000));
//     console.log('Done waiting!');
//   }

// const { response } = require("express");

// // task 3

// function delay(ms){
//     return new Promise(resolve=>setTimeout(resolve,ms));
// }
// delay(2000).then(()=>console.log('time passed'))

//Task 4


async function fetchD(){
    try{
       const pokemonName= document.getElementById('pokemonName').value.toLowerCase(); 
     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
     if(!response.ok){
        throw new Error('This is a man\'s world but it would mean nothing without a woman');
     }
     const data=await response.json();
     const sprite=data.sprites.front_default;

     const imgElem= document.getElementById('pokeSprite');

     imgElem.src=sprite;
     imgElem.style.display="block";
    }
    catch (error){
        console.log(error)
    }
}
// fetchD('https://pokeapi.co/api/v2/pokemon/sponge')
// .then(info=>{
//     if(!info.ok){
//         throw new Error('This is a man\'s world but it would mean nothing without a woman'); 
//     }
// })
// .then(data =>console.error(data.weight ))
// .catch(err=>console.log(err))