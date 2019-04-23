# Part 5

Some games that the tabletop RPG players play don't use standard dice at all! They use custom dice of all sorts of different sizes and with all sorts of numbers on the faces - some with gaps, some with repeated numbers.

Change your application so that it first asks the user if they want "standard" or "custom" dice. 

If they ask for "standard" dice, then carry on as before - ask for the size and the number of rolls, then display the total.

If they ask for "custom" dice, then ask them how many faces are on their custom dice, then ask them for the number on each face of the dice, and finally ask them for a number of rolls before displaying the total.

As in the previous part, try to make sure that your main program is easy to understand from a quick read. That means that any slightly fiddly calculations or operations should be defined as their own methods. For example, you might write something like this in your main method:

```javascript
// ...

if (isCustom) {
    let customFaces = askUserForCustomFaces();
    let numberOfRolls = askUserForNumber();
    let totalRoll = calculateCustomTotal(customFaces, numberOfRolls);
    console.log(totalRoll);
}
else {
    let sizeOfDice = askUserForNumber();
    let numberOfRolls = askUserForNumber();
    let totalRoll = calculateStandardTotal(sizeOfDice, numberOfRolls);
    console.log(totalRoll);
}

// ...
```

In that example, there are methods `askUserForCustomFaces`, `calculateCustomTotal` and `calculateStandardTotal`. There are probably other improvements to be made as well - that's just a start! See what you can come up with, and when it's working and you're happy with the code, push it to GitHub and get some feedback.
