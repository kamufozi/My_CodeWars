function twoSort(s) {
    s=s.sort();
      let word=[];
    for(let i=0;i<s[0].length;i++){
        if(i===s[0].length-1){
             word.push(s[0][i]);
            continue;
        }
        word.push(s[0][i]);
        word.push('***');
    }
      return word.join('');
  }
  twoSort([ "take","bitcoin", "over", "the", "world", "maybe", "who", "knows", "perhaps"]);