

function solution(number){
    let sum=0;
    for (let j=3 ; j<number ; j++){
      if(j%3===0||j%5===0){
        sum +=j;
      }
    }
    return sum;
  }
  

console.log(solution(15)); 