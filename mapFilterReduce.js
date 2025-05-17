const users = [
    { name: "Fozi", age: 19 },
    { name: "Mira", age: 22 },
    { name: "Alex", age: 25 },
    { name: "Ivan", age: 30 },
    { name: "Sasha", age: 17 }
  ];
//Filter method

const youngUsers = users.filter(user => user.age < 25);
console.log(youngUsers);

// //Map method

// const names = users.map(user => user.name);
// console.log(names);


// //Reduce method 

// const totalAge = users.reduce((sum, user) => sum + user.age, 0);
// const avgAge = totalAge / users.length;
// console.log(`Average age is: ${avgAge}`);


// //Extra 

// const youngNames = users
//   .filter(user => user.age < 25)
//   .map(user => user.name);

// console.log(youngNames); // ["Fozi", "Mira"]
