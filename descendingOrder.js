
// lister les élements descendentes

function descendingOrder(number){
    const sd = Array.from(number.toString()).sort((a,b)=>b-a);
    const dg = parseInt(sd.join(''));  
    return dg;

    //return parseInt(String(n).split('').sort().reverse().join(''))
    //return parseInt(n.toString().split('').sort().reverse().join(''), 10);
  }

  console.log(descendingOrder(4216725)); 