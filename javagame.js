function myFunction(){
    document.getElementById('demo').innerHTML = 'Ready, Set..';
}

var dice1 = 6;
var dice2 = 6;

var sum = dice1+dice2;
console.log("The sum of two dice is" + " " + sum);

console.log(Math.floor(Math.random()*6)+1);

function generateRandomNumbers(){
    return Math.floor(Math.random()*6)+1
}

let randomNumberGenerated = generateRandomNumbers ();
console.log(randomNumberGenerated);

if(dice1 == dice2){
    console.log("You Win!!");
}

else if (sum == 7 || sum == 11){
    console.log ("You Lose")
}

else{
    console.log("Try Again");
}
