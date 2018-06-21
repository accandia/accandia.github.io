$(document).ready(function() {
  // The random number shown at the start of the game should be between 19 - 120.
        var randomNum = Math.floor((Math.random() * 120) + 19);
  
  $('#score').text(randomNum);
        
        // Each crystal should have a random hidden value between 1 - 12.
  
        var crystalNumber1 = Math.floor((Math.random() * 12) + 1);
        var crystalNumber2 = Math.floor((Math.random() * 12) + 1);
        var crystalNumber3 = Math.floor((Math.random() * 12) + 1);
        var crystalNumber4 = Math.floor((Math.random() * 12) + 1);
  
        // Set players score and wins/loses to zero.
        var playersScore = 0;
        var wins = 0;
        var losses = 0;
  
  
  
  // Winner function, if player's score equals randomNum, increase our wins by one.
  // Add win to the win counter and alert the player "You won!" and run game reset function.
  function winner(){
    if (playersScore === randomNum);
    wins++;
    $('#wins').text("Wins: " + wins);
    alert('You won!');
    reset();
  }
  
  // Loser function, if player's score is > than randomNum, user looses. And run game reset function.
  function loser(){
    if (playersScore > randomNum);
    losses++;
    $('#losses').text("Losses: " + losses);
    alert('You lose!');
    reset();
  }
  
  // Click event for the crystals, on click takes the crystal number and continues adding it to player's score.
  // If player's score equals randomNum we run our winner function, else if their score goes over, they lose.
    $('#crystal-1').on('click', function(){
      playersScore = playersScore + crystalNumber1;
      $('#players-score').text(playersScore);
  
        if (playersScore === randomNum) {
          winner();
        }
  
        else if (playersScore > randomNum){
          loser();
        }
        console.log(crystalNumber1);
  
    })
  
    $('#crystal-2').on('click', function(){
      playersScore = playersScore + crystalNumber2;
      $('#players-score').text(playersScore);
  
        if (playersScore === randomNum) {
          winner();
        }
  
        else if (playersScore > randomNum){
          loser();
        }
  
    })
  
    $('#crystal-3').on('click', function(){
      playersScore = playersScore + crystalNumber3;
      $('#players-score').text(playersScore);
  
        if (playersScore === randomNum) {
          winner();
        }
  
        else if (playersScore > randomNum){
          loser();
        }
  
    })
  
    $('#crystal-4').on('click', function(){
      playersScore = playersScore + crystalNumber4;
      $('#players-score').text(playersScore);
  
        if (playersScore === randomNum) {
          winner();
        }
  
        else if (playersScore > randomNum){
          loser();
        }
  
    })
  
  // Reset function: Generate a new random numbers as well as reset the players score but not our wins/losses scoreboard
  
    function reset(){
    randomNum = Math.floor((Math.random() * 120) + 19);
    $('#score').text(randomNum);
    crystalNumber1 = Math.floor((Math.random() * 12) + 1);
    crystalNumber2 = Math.floor((Math.random() * 12) + 1);
    crystalNumber3 = Math.floor((Math.random() * 12) + 1);
    crystalNumber4 = Math.floor((Math.random() * 12) + 1);
    playersScore = 0;
    $('#players-score').text(playersScore);
    
    }

  });