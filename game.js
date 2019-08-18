$( document ).ready(function(){
    // Selects a random number to be shown at the start of the game
    let Random=Math.floor(Math.random()*101+19)
    // Appending random number to the randomNumber id in html
    $('#randomNumber').text(Random);
    // Assign up random numbers for each jewel between 1-12

    let yellowNumber= Math.floor(Math.random()*12+1)
    let redNumber= Math.floor(Math.random()*12+1)
    let greenNumber= Math.floor(Math.random()*12+1)
    let blueNumber= Math.floor(Math.random()*12+1)
    
    //changing variables
    let userTotal= 0; 
    let wins= 0;
    let losses = 0;

    //Declaring variables for tallies
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  $('#currentScore').text(userTotal);
  
  //function to reset the game
  function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#randomNumber').text(Random);
    yellowNumber= Math.floor(Math.random()*12+1);
    redNumber= Math.floor(Math.random()*12+1);
    greenNumber= Math.floor(Math.random()*12+1);
    blueNumber= Math.floor(Math.random()*12+1);
    userTotal= 0;
    $('#currentScore').text(userTotal);
  } 

  //on click reset scores
  $('#reset').on ('click', function(){
    reset();  
  }) 

  //adds the wins to the userTotal
  function win(){
    alert("WIN: You've met your crystal goal--Play again!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }

  //adds the losses to the userTotal
  function loss(){
    alert ("LOSS: Your bag was overfilled and broke--Play again!");
    losses++;
    $('#numberLosses').text(losses);
    reset();
  }

  //sets up click for jewels     
  //sets win/lose conditions from jewels
    $('#yellow').on ('click', function(){
      userTotal = userTotal + yellowNumber;
      console.log("New userTotal= " + userTotal);
      $('#currentScore').text(userTotal); 
            //sets win/lose conditions
          if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loss();
          }   
    })  
    $('#red').on ('click', function(){
      userTotal = userTotal + redNumber;
      console.log("New userTotal= " + userTotal);
      $('#currentScore').text(userTotal); 
          if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loss();
          } 
    })  
    $('#green').on ('click', function(){
      userTotal = userTotal + greenNumber;
      console.log("New userTotal= " + userTotal);
      $('#currentScore').text(userTotal);
            if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loss();
          } 
    })  
    $('#blue').on ('click', function(){
      userTotal = userTotal + blueNumber;
      console.log("New userTotal= " + userTotal);
      $('#currentScore').text(userTotal); 
        
            if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loss();
          }
    });   
  }); 
