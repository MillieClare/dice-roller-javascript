const readlineSync = require('readline-sync');
function rollDice() {
    console.log("Welcome!");
    const userRollRequest = readlineSync.question("How many times would you like to roll the dice?");
    const userDiceRequest = readlineSync.question("How many sides does this dice have?");
    getRandomNumber(userRollRequest, userDiceRequest);
}

function getRandomNumber(rollNumber, sideNumber) {
    if (isNaN(rollNumber) || isNaN(sideNumber) || rollNumber < 1 || sideNumber < 1) {
        console.log('Please make sure your numbers are valid');
    } else {
        const userRollResults = [];
        let sumOfRolls = 0;
        for (let i = 0; i < rollNumber; i++) {
            const rollResult = Math.floor(Math.random() * sideNumber) + 1;
            userRollResults.push(rollResult);
            sumOfRolls += rollResult
        }
        console.log(userRollResults);
        console.log('Your dice rolls are:', sumOfRolls);
    }
}
rollDice();
