function twoSum(numbers, target) {
    let index1,index2;
    let a = new Set();
    for (let i =0;i<numbers.length;i++){
    // while (!a.has(i)){
    //     a.add(i);
    //     }
        for (let j=i+1;j<numbers.length;j++){
            let sum = numbers[i]+numbers[j];
            console.log('what');
            if(sum===target){
                console.log('I reached here')
                index1=i;
                index2=j;
            }
        }
    }
    return [index1, index2];
