/*Let arr be an array.
Create a function unique(arr) that should return an array with unique items of arr.*/


function unique(arr){
  let finalArray = []; 
  for (let item of arr){
    if(!finalArray.includes(item)){
      finalArray.push(item)
    }
  }
  return finalArray;
}