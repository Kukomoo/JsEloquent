//Write the function getAverageAge(users) 
//that gets an array of objects with property age 
//and returns the average age.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];


function getAverageAge(users){
  let average = 0;
  let count = users.length;
  users.forEach(user => average += user.age)
  return average / count
}

alert( getAverageAge(arr) );