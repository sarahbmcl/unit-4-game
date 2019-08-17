// //show random number between 19-120

// //4 buttons
//     //click crystal to add specific points to score 1-12
//         //hidden until clicked
//         //click and add to score counter

// //win if score matches random number
//     //add 1 win
// //lose if score > random number
//     //add 1 loss
// //restart with win/lose
//     //start with new random number
//     //crystals have new values

// //----------Variables----------//

// let randomNumber= ""
// let crystalNumber= ""
// let wins = 0;
// let losses = 0;
// let counter ="";

// //----------Functions----------//

// $(document).ready(function() {
//     theGame.initialize();
//     start();

//     let counter = 0;
// $(".crystal-image").on("click", function() {
// });

//     $("#green").on("click", function(){
//         if(!theGame.wonGame() && !theGame.lostGame()){
//             theGame.score += theGame.crystal1;
//             $("#score").text(theGame.score);
//             $("#green .value").text(theGame.green;
//             theGame.checkStatus();
//         }
//     });

//     $("#yellow").on("click", function(){
//         if(!theGame.wonGame() && !theGame.lostGame()){
//             theGame.score += theGame.crystal1;
//             $("#score").text(theGame.score);
//             $("yellow .value").text(theGame.yellow);
//             theGame.checkStatus();
//         }
//     });

//     $("#red").on("click", function(){
//         if(!theGame.wonGame() && !theGame.lostGame()){
//             theGame.score += theGame.crystal1;
//             $("#score").text(theGame.score);
//             $("#red .value").text(theGame.red);
//             theGame.checkStatus();
//         }
//     });

//     $("#blue").on("click", function(){
//         if(!theGame.wonGame() && !theGame.lostGame()){
//             theGame.score += theGame.crystal1;
//             $("#score").text(theGame.score);
//             $("#blue .value").text(theGame.blue);
//             theGame.checkStatus();
//         }
//     });


// //RESTART GAME//
// $("#restart").on("click", function(){
//     theGame.initialize();
// });





/////SECONDARY FUNCTIONS/////

$(document).ready(function() {
    //shows random number between 19 and 102
    let random = Math.floor(Math.random()*102+19);

    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);

    //sets random value between 1 and 12 for crystal
    let crystalValues = {};
    crystalValues[yellow] = Math.floor(Math.random()*12+1);
    crystalValues[red] = Math.floor(Math.random()*12+1);
    crystalValues[green] = Math.floor(Math.random()*12+1);
    crystalValues[blue] = Math.floor(Math.random()*12+1);

    //set scores to 0
    $("#crystalValues").text(random);
    let userTotal= 0;
    let wins = 0;
    let losses = 0;

    function getCrystalHandler(crystalKey) {
        //adds user choice to total
        return function() {
            userTotal = userTotal + crystalValues[crystalKey];
            console.log("New userTotal " + userTotal);
            $("#score").text(userTotal);
        
        //if user reaches exact random number run winning function
        if (userTotal === random) {
            winner()
        }
        //if user total exceeds random number immediately run losing function
        else if (userTotal > random) {
            loser()
        } 
    }
}

    //winning function
    function winner() {
        alert("You Won!!");
        wins++;
        $("#numberWins").text(wins);
        reset();
    }

    //losing function
    function loser() {  
        losses++;
        $("#numberLosses").text(losses);
        reset();
    }

    //on click run crystal handler function
    $("#yellow").on("click", getCrystalHandler(yellow));
    $("#red").on("click", getCrystalHandler(red));
    $("#green").on("click", getCrystalHandler(green));
    $("#blue").on("click", getCrystalHandler(blue));

    //when game is reset...
    function reset() {
    random = Math.floor(Math.random()*102+19);
    console.log(random);
    $("#crystalValues").text(random);
    let yellow = Math.floor(Math.random()*12+1);
    let red = Math.floor(Math.random()*12+1);
    let green = Math.floor(Math.random()*12+1);
    let blue = Math.floor(Math.random()*12+1);
    userTotal = 0;
    $("#score").text(userTotal);
    }

    //designates which code to run when clicked
    $("#yellow").on("click", getCrystalHandler(yellow));
    $("#red").on("click", getCrystalHandler(red));
    $("#green").on("click", getCrystalHandler(green));
    $("#blue").on("click", getCrystalHandler(blue));

});