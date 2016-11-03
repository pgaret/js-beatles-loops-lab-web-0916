function theBeatlesPlay(musicians, instruments){
  var emptyArr = [];
  for(let i = 0; i < musicians.length; i++){
    emptyArr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArr;
}

function johnLennonFacts(array){
  for (let i = 0; i < array.length; i++){
    array[i] += "!!!";
  }
  return array;
}

function iLoveTheBeatles(n){
  var emptyArr = [];
  do {
    emptyArr.push("I love the Beatles!")
    n++
  } while(n < 15);
  return emptyArr;
}
