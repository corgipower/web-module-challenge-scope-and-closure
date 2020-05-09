// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *    The count variable is inside an outer function for 1 and is global for 2
 * 2. Which of the two uses a closure? How can you tell?
 *    counter 1 because everything needed is inside a funstion
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *    counter1 would be preferable most of the time, counter2 would be preferable if you need to use the count variable elsewhere
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

    return Math.floor(Math.random() * 3);

}
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, num){
  let home = 0;
  let away = 0;

  for(let i = 1; i <= num; i++) {
    home += callback();
    away += callback();
  }

  return {
    "Home": home,
    "Away": away
  }

}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(callback, num) {

  let home = [];
  let away = [];

  let scores = ""

  for(let i = 1; i <= num; i++) {
    home.push(callback());
    away.push(callback());

    reducer = home.reduce((ac, next) => ac + next, 0) + " - " + away.reduce((ac, next) => ac + next, 0);
    if(i === 1){
      scores += "1st inning: " + reducer + "\n";
    } else if(i === 2){
      scores += "2nd inning: " + reducer + "\n";
    } else if(i === 3){
      scores += "3rd inning: " + reducer + "\n";
    } else if(i > 3){
      scores += i + "th inning: " + reducer + "\n";
    }

    if(i === 9) {
      scores += "Final Score: " + reducer + "\n";
    }
  }

  return scores;

}

console.log(scoreboard(inning, 6));
