//task 1
async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  }
//task 2  
async function waitAndPrint() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log('Done waiting!');
  }
