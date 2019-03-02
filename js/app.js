/*From wikipedia https://en.wikipedia.org/wiki/Roulette
Roulette is a casino game named after the French word meaning little wheel. In the game, players may choose to place bets on either a single number, various groupings of numbers, the colors red or black, whether the number is odd or even, or if the numbers are high (19–36) or low (1–18).*/

//Objective
/*Create a web app that will generate a random number between 0 - 36.
For even numbers not including zero, give it a background color of black and a font color of white.
For odd numbers, give it a background color of red and a font color of white.
For the number 0, give it a background color of green and a font color of white.

A random number will be generated every 5 seconds.*/

// Bonus
// 1) Add some additional styling to your application.
// 2) Create on and off buttons that will start and stop your application.

var options = [];

for (var i = 0; i < 37; i++) {
    options.push(i);

    var numberBox = document.createElement('div');

    if (i === 0) {
        numberBox.className = 'zeroNumber';
    }
    else if (i % 2 === 0 && i != 0) {
        numberBox.className = 'evenNumber';
    } else {
        numberBox.className = 'oddNumber'
    }

    //numberBox.className = 'number';
    numberBox.innerHTML = i;
    roulette.appendChild(numberBox);
}


spin.addEventListener('click', runGame());

function runGame () {
    var zeroBox = document.getElementsByClassName('zeroNumber');
    var evenBox = document.getElementsByClassName('evenNumber');
    var oddBox = document.getElementsByClassName('oddNumber');

    activateSpin(zeroBox[0]);

    for (var i = 0; i < 18; i++) {
        activateSpin(evenBox[i]);
        activateSpin(oddBox[i]);
    }

 }


 function activateSpin(box) {
    box.style.animationName = 'spin';
    box.style.animationDuration = '1000ms';
    box.style.animationIterationCount = '1';
    box.style.animationTimingFunction = 'linear';
 }