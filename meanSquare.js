const solution = function(firstArray, secondArray) {
    let absArr=[];
  for (let i=0;i<firstArray.length;i++){
      let abs=firstArray[i]-secondArray[i];
      if (abs<0)abs=(-1) * abs;
      abs=abs*abs;
      absArr.push(abs);
  }
    let sum=absArr.reduce((acc,curr)=>acc+curr,0);
    return (sum/firstArray.length);
}
console.log(solution([1, 2, 3],[4, 5, 6] ));