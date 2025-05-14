function toBinary(n){
let binary = "";
  binary+=n.toString(2);
  return Number(binary);
}

console.log(toBinary(10));
