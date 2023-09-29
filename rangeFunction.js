function range(start, end, step){
  
  let arr = [];
  if (step === undefined){
    for(let i = start; i <= end; i++){
      arr.push(i)
    }
  } else if (step < 0) {
    for(let y = start; y >=end; y += step)
    arr.push(y)
  } else {
    for(let z = start; z <= end; z += step)
    arr.push(z)
  }
  
  return arr
}

function sum(arr){
  let sum = 0
  arr.forEach((e) => sum += e)
  return sum
}
console.log(range(5, 2, -1));  
console.log(range(1, 10, 2)); 
console.log(sum(range(1, 10)));