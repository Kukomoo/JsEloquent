/* Let’s say we received an array of users in the form {id:..., name:..., age:... }.
Create a function groupById(arr) that creates an object from it, 
with id as the key, and array items as values. */

function groupById(arr){
  arr.reduce((obj, item) => {
    obj[item.id] = item;
    return obj
  }, {})
}