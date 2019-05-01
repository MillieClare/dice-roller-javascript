const readlineSync = require('readline-sync');
function rollDice(){
    console.log("Welcome!");
    const userRollRequest = readlineSync.question("How many times would you like to roll the dice?")
    const userRollResults = [];

    for(let i = 0; i < userRollRequest; i++){
    const rollResult = Math.floor(Math.random() * 6) + 1;
    userRollResults.push(rollResult);
    }
    console.log('Your dice rolls are:', userRollResults);
}

rollDice();
