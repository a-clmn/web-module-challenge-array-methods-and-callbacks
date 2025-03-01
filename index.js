const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note. 

💡 HINT: You may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final

//(b) Away Team name for 2014 world cup final

//(c) Home Team goals for 2014 world cup final

//(d) Away Team goals for 2014 world cup final

//(e) Winner of 2014 world cup final */


// let finalsPlayersHT = filterBy2014 = fifaData.filter((element) => {
//          return element.Year === 2014
//     }).filter((element) => {
//              return element.Stage === "Final"
//          }).map((element) => {
//          return element['Home Team Name']
//     })

// let finalsPlayersAT = filterBy2014 = fifaData.filter((element) => {
//         return element.Year === 2014
//    }).filter((element) => {
//             return element.Stage === "Final"
//         }).map((element) => {
//         return element['Away Team Name']
//    })

// let finalsPlayersHTGOALS = filterBy2014 = fifaData.filter((element) => {
//     return element.Year === 2014
// }).filter((element) => {
//         return element.Stage === "Final"
//     }).map((element) => {
//     return element['Home Team Goals']
// })

// let finalsPlayersATGOALS = filterBy2014 = fifaData.filter((element) => {
//     return element.Year === 2014
// }).filter((element) => {
//         return element.Stage === "Final"
//     }).map((element) => {
//     return element['Away Team Goals']
// })

// let finalsPlayersWinner = filterBy2014 = fifaData.filter((element) => {
//     return element.Year === 2014
// }).filter((element) => {
//         return element.Stage === "Final"
//     }).map((element) => {
//     return element['Home Team Name']
// })

// console.log("Task 1a", finalsPlayersHT)
// console.log("Task 1b", finalsPlayersAT)
// console.log("Task 1c", finalsPlayersHTGOALS)
// console.log("Task 1d", finalsPlayersATGOALS)
// console.log("Task 1e",finalsPlayersWinner)

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive an array as a parameter that will take the fifa data as its argument
2. Return an array of objects with the data of the teams that made it to the final stage

💡 HINT - you should be looking at the stage key inside of the objects
*/

 function getFinals(dataArray) {
    return dataArray.filter((element) => element.Stage === "Final");
 }

 console.log("Task 2", getFinals(fifaData))


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(array, CBFinals) {
    return CBFinals(array).map(element => element.Year);
}
console.log("Task 3", getYears(fifaData, getFinals))

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Determines the winner (home or away) of each `finals` game. 
💡 HINT: Don't worry about ties for now (Please see the README file for info on ties for a stretch goal.)
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(array, CBFinals) {
    // let winners = 0
    // if (CBFinals(array).map(element => element["Home Team Goals"] > ["Away Team Goals"]) {
    //      return winners = CBFinals(array).map(element => element["Home Team Name"])
    // })
    //  else {
    //     return winners = CBFinals(array).map(element => element["Away Team Name"]);
    //  }
return CBFinals(array).map(element => 
    element["Home Team Goals"] > element["Away Team Goals"] ? 
    element["Home Team Name"] : element["Away Team Name"]);
 }

console.log("Task 4", getWinners(fifaData, getFinals))



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Receive a callback function as the third parameter that will take getYears from task 3 as an argument
4. Receive a callback function as the fourth parameter that will take getWinners from task 4 as an argument
5. Return an array of strings that say "In {year}, {country} won the world cup!" 

💡 HINT: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(array, CBFinals, CBYears, CBWinners) {
    let country = CBWinners(array, CBFinals)
    let year = CBYears(array, CBFinals)
    return country.map((country, index) =>  `In ${year[index]}, ${country} won the world cup!`);
    }

console.log("Task 5", getWinnersByYear(fifaData, getFinals, getYears, getWinners))

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function `getAverageGoals` to do the following: 
 1. Receive a callback function as a parameter that will take `getFinals` (from task 2) as an argument; ensure you pass in `fifaData` as its argument
 
 💡 HINT: Example of invocation: `getAverageGoals(getFinals(fifaData));`

 2. Calculate the AVERAGE number of the TOTAL home team goals AND TOTAL away team goals scored PER MATCH

 3. Round to the second decimal place and return the value
 
 💡 HINT: use .reduce, .toFixed (refer to MDN for syntax), and do this in 2 steps) 
 
*/

function getAverageGoals(CBFinals) {
    const sumsHomeAway = (CBFinals.map((element) => element["Home Team Goals"]).reduce((acc, currentValue) =>
    acc + currentValue) / CBFinals.length) + (CBFinals.map((element) => element["Away Team Goals"]).reduce((acc, currentValue) =>
    acc + currentValue) / CBFinals.length)
    return sumsHomeAway.toFixed(2)
 }

console.log("Task 6", getAverageGoals(getFinals(fifaData)))


/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
