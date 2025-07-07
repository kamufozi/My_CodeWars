// ### **Count the number of Duplicates**

// Write a function that will return the count of **distinct case-insensitive** alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// ### **Example**

// "abcde" -> 0 `# no characters repeats more than once`

// "aabbcde" -> 2 `# 'a' and 'b'`

// "aabBcde" -> 2 `# 'a' occurs twice and 'b' twice (`b` and `B`)`

// "indivisibility" -> 1 `# 'i' occurs six times`

// "Indivisibilities" -> 2 `# 'i' occurs seven times and 's' occurs twice`

// "aA11" -> 2 `# 'a' and '1'`

// "ABBA" -> 2 `# 'A' and 'B' each occur twice`

// Algorithm:

// 1. change it to smallcase  ✅
// 2. we have to find duplicates : if one character comes more than once we increment the count and then return the count. What is the count?? How do we find the count 

// 2.1 create the count variable ✅

// 2.2 check if the char came more than once

// 2.2.1 loop through the chars so (split the string ✅ ) ✅

// 2.3 for every small[i] I’m thinking of the filter method where we can write small[i] and check it against all other

function duplicateCount(text){
    
    let small = text.toLowerCase(); 
    let count = 0;
    small = small.split("")
    let filtered = new Set();
    for (let i = 0; i < small.length; i++ ){
        for (let j = i+1; j <small.length;j++){
           if (small[i] === small[j]){
               filtered.add(small[i])
               
           } 
        }
    }
    return(filtered.size)
}