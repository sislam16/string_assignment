// # String Exercises
//
// 1. console.log the first character of a string.
let str = "water";
console.log(str[0]);

// 2. console.log the length of a string.
let fud = "lasagna";
console.log(fud.length);

// // 3. console.log the last character of any string.
let flower = "tulip";
console.log(flower[flower.length -1]);

// 4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:
//
// ```js
// 'jimmy'
// // => 'jimmY'
// ```
let word = "chips";
let copy = word.slice(0,4) + word[4].toUpperCase();
console.log(copy);

// 5. Create a drEvil code block that will take a single number varaible, and log the '<variablbeAmount> dollars',
// your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:
//
// ```js
// let amount = 10
// // => 10 dollars
// let amount = 1000000
// // =>  1000000 dollars (pinky)
// ```

let amount = 10;
   if(amount === 1000000){
     console.log(amount + ' dollars (pinky)');
   } else{
     console.log(amount + ' dollars ');
   }


// 6. Create a `verbing` code block. It should take a single string variable. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.
// For example:
//
// ```js
// verbing('box')
// // => 'boxing'
// verbing('train')
// // => 'training'
// verbing('swimming')
// // =>  'swimmingly'
// verbing('go')
// // =>  'go'
// ```


let verb = 'fly';
if(verb.slice(-3)=== 'ing'){
  console.log(verb + 'ly');
} else if(verb.length!==3){
  console.log(verb);
} else {
  console.log(verb + 'ing');
}


// 7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the  last
let yay = "Congratulations! You did it!";
let yay2= yay.slice(0,-1);
console.log(yay2);

// ## Bonus Questions
//
// 1. Write a code block that adds a "#" to a string if the string has an odd number of characters, otherwise leave it as is.
// print/log the result
//
//     Examples:
//
//   ```js
//   let name = 'taq'  // should log 'taq#'
//   let name2 ='john' // should log 'john'
//   ```
// ___
//
// 2. Write a code block that prints/logs the 3rd to last characters of a string.
// If the string is not at least 3 characters long then log an error message.
// <details>
//     <summary>
//         Hint
//     </summary>
//     It should work for strings of any length.
// </details>
//
// Examples, for variables:
// ```js
// let name1 = 'Taq' // Should log 'Taq'
// let sentence = 'He is Taq'// Should log 'Taq'
// ```
// ___

let col = 'red';
let sentence = 'I like to wear the color red';
if(col.length !== 3){
  console.log('This is an error message!');
} else{
  console.log(str);
}

//
// 3. Write a code block that prints/logs whether a string `x` starts with a vowel.
// <details>
//   <summary>
//     Extra
//   </summary>
//
//   Make it [case insensitive](https://en.wikipedia.org/wiki/Case_sensitivity)
//
// </details>


// ___
//
// 4. Write a code block that given two strings, `str1` and `str2`, prints/logs a new string with `str2` mashed into the middle of `str1`
//
// Examples:
//
//   - For `str1` = 'help' and `str2` = 'me'. Your program should log `'hemelp'`
//
//    - For `str1` = 'hello' and `str2` = 'world'. Your program should log `'helworldlo'`
//
// ___
//
let item1 = 'yuck';
let item2 = 'yum';
let mixy = item1.slice(0,2) + item2 + item1.slice(2,4);
console.log(mixy);

//
// 5. Write a code block that prints/logs whether a string `x` has at least one vowel in it.
//
// Examples:
//   - For `x` = 'taq'. Your program should log `'taq' has a vowel'`
//   - For `x` = 'dfghjkl'. Your program should log `'dfghjkl' does not have a vowel'`
//   - For `x` = '' Your program should log `'' does not have a vowel'`
//
// <details>
//   <summary>
//     Extra & Hint:
//   </summary>
//
//   - **Hint**: Abstain from using loops. Explore string methods.
//
//   - **Extra**: Make it [case insensitive](https://en.wikipedia.org/wiki/Case_sensitivity). So that for `x` = 'TAQ' it should log
//   `'TAQ' has a vowel`
// </details>
//
// ___
//
// ### Practice Makes Perfect.
// Find at [CodingBat](https://codingbat.com/java/String-1) more problems/questions to keep practicing. You can pick which ones to do. You can ignore the fact that their solutions are supposed to be written in Java, I trust you that you can write a solution code block in JavaScript. Create a file `codingBatStrings.js` copy and paste the problem statement as a comment, underneath write your solution.
//
// > **Remember**: This are bonuses and extra points. You don't have to do them but if you do, you will just get better.
//
