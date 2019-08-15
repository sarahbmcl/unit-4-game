//show random number between 19-120

//4 buttons
    //click crystal to add specific points to score 1-12
        //hidden until clicked
        //click and add to score counter

//win if score matches random number
    //add 1 win
//lose if score > random number
    //add 1 loss
//restart with win/lose
    //start with new random number
    //crystals have new values

//----------Variables----------//

let randomNumber= ""
let crystalNumber= ""
let wins = 0;
let losses = 0;
let counter ="";

//----------Functions----------//

start();

function start(){
    for (i=0; i<randomNumber.length; i++) {
    randomNumber = Math.floor(Math.random() * randomNumber.length);

	console.log(randomNumber);

	//join the "_ " array into a string.
	console.log(blanks.join(" "));
	document.querySelector("#input").innerHTML = (blanks.join(" "));
	document.querySelector("#letters").innerHTML = (letters);
	document.querySelector("#guesses").innerHTML = (guesses);
	document.querySelector("#score").innerHTML = ("Wins: "+ wins + " Losses: "+ losses);
}

let counter = 0;
$(".crystal-image").on("click", function() {
});