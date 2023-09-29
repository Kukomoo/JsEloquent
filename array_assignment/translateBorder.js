/* Write the function camelize(str) that changes dash-separated 
words like “my-short-string” into camel-cased “myShortString”.
That is: removes all dashes, each word after dash becomes uppercased.
*/

function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      /* + word.slice(1) this adds the rest of the word letters 
      for example the word long after it's processed 
      by word[0].toUpperCase() the result would be
      = "L" then the word.slice(1) is 
      equal to "ong" and it's added to the captalized "L"
      to form "Long"*/
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}