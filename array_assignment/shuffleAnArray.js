/* Write the function shuffle(array) that shuffles 
(randomly reorders) elements of the array.*/

function shuffle(array){
  array.sort(() => Math.random - 0.5);
}