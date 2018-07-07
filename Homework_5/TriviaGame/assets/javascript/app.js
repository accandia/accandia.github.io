var questions = [
    {question: "Stratus, Cirrus and Cumulus are types of what?", choices: ["Rocks", "Animals", "Cars", "Clouds"], answer: "Clouds"},
    {question: "What is the name of the phenomenon when the magnetoshpere in the Northern Hemispere is disturbed by the solar wind resulting in a natural light display?", choices: ["UFOs", "Clouds", "Starlight", "Aurora Borealis"], answer: "Aurora Borealis"},
    {question: "Which is the most abundant metal in the earth's crust?", choices: ["Iron", "Aluminum", "Gold", "Copper"], answer: "Aluminum"},
    {question: "What is the second most abundant element in the earth's atmoshpere?", choices: ["Hydrogen", "Lythium", "Oxygen", "Nitrogen"], answer: "Oxygen"},
    {question: "What is the world largest ocean?", choices: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Antartic Ocean"], answer: "Pacific Ocean"},
    {question: "In what month is the Earth closest to the sun?", choices: ["January", "May", "July", "June"], answer: "January"},
    {question: "What is the only sea on Earth with no coastline?", choices: ["Black Sea", "Salt Sea", "Sargasso Sea", "Mediterranean Sea"], ansewr: "Saragasso Sea"},
    {question: "What is the most abundant element in the earth's atmoshpere?", choices: ["Hydrogen", "Lythium", "Oxygen", "Nitrogen"], answer: "Nitrogen"}, 
    {question: "What is the deepest point in the ocean floor?", choices: ["15,245 feet", "28,469 feet", "54,411 feet", "35,814 feet"], answer: "35,814 feet"},
    {question: "What color may the earth once have been?", choices: ["Purple", "Pink", "Yellow", "Black"], answer: "Purple"}, 
];
    
    var secRemain = 60;
  
      var intervalId;
  
   
     // bellow function will show the trivia questions and will decrement the counter by 1 second.
      function begin() {
    
        intervalId = setInterval(timesUp, 1000);
  
    
        $("#question0").show();
        $("#question1").show();
        $("#question2").show();
        $("#question3").show();
        $("#question4").show();
        $("#question5").show();
        $("#question6").show();
        $("#question7").show();
        $("#question8").show();
        $("#question9").show();
        $("#startButton").hide();
        $("#doneButton").show();
  
        // For loop to go through all the questions 
        for(var j=0; j<questions.length; j++ ) {
          var question = questions[j];
          var newQues = $("<h3>" + question.question + "</h3>");
  
          newQues.appendTo($("#question"+j));
  
        // For loop that will look at each question's answer
          for(var i=0; i<question.choices.length; i++){
            //Create the answer radio buttons
          var answerButton = $("<input type='radio'>");
            answerButton
            .attr("name", "fieldName" + j)
            .attr("value", question.choices[i])
            .addClass("text");
  
            answerButton.appendTo($("#question"+j));
            answerButton.after(question.choices[i]);
          }
        }
      }
  
     // Show time decreasing and once time is up, hide question and show all done results.
      function timesUp() {
  
        secRemain--;
  
        $("#show-number").html("<h2> Time Remaining: " + secRemain + " Seconds </h2>");
  
        if (secRemain <= 0) {
          stop();
          hideQuestion();
          showAllDone();
          alert("Times Up!");
        }
      }
  
     // the below function is called when time is up:

      function hideQuestion() {
        $("#question0").hide();
        $("#question1").hide();
        $("#question2").hide();
        $("#question3").hide();
        $("#question4").hide();
        $("#question5").hide();
        $("#question6").hide();
        $("#question7").hide();
        $("#question8").hide();
        $("#question9").hide();
      }
      
      // the below will hide the results:
      function hideAnswer() {
        $("#correctAnswer").hide();
        $("#incorrectAnswer").hide();
        $("#unanswered").hide();
      }
  
      // The below function will invoke the results of the Trivia. 
      function showAllDone() {
  
        $("#show-number").hide();
  
        $("#log").text("All Done!");
        $("#correctAnswer").show();
        $("#incorrectAnswer").show();
        $("#unanswered").show();
        $("#doneButton").hide();
  
        var unanswered = 0;
        var correctAnswer = 0;
        var incorrectAnswer = 0;
  
        // For loop through all the questions in the questions array, get the sected question input in the radio button
        for(var i=0; i<questions.length; i++) {
          var selected = $("input[type='radio'][name='fieldName" + i + "']:checked");
          if(selected.length > 0 ) {
              // compare the player's selected answer with the correct answer.
              if(selected.val() === questions[i].answer) {
                // if player selects the correct answer, increase the correctAnswer counter by 1
                correctAnswer++;
              } else {
                // else, player selects the incorrect answer, increase the incorrectAnswer by 1. 
                incorrectAnswer++;
              }
          } else {
            // or if/else none of the radio button is selected; increase the unanswered counter
            unanswered++;
          }
        }
  
        // Display the number of correct, incorrect, unswered questions on the page:
        $("#correctAnswer").html("<span> Correct Answers: " + correctAnswer + "</span>");
        $("#incorrectAnswer").html("<span> Incorrect Answers: " + incorrectAnswer + "</span>");
        $("#unanswered").html("<span> Unanswered: " + unanswered + "</span>");
  
      }
  
     // Function to start the game, hide questions and answers, show the start button with ability to invoke the begin function if the user clicks the button.
      function start() {
        hideQuestion();
        hideAnswer();
        $("#doneButton").hide();
        $("#startButton").click(begin);
        $("#doneButton").click(stop);
      }
  
      // stop function to stop the game, hide the qustions, and show results.
      function stop() {
  
        clearInterval(intervalId);
        hideQuestion();
        showAllDone();
      }
      
      $(document).ready(function() {
        // when document is ready, call the start method
        start();
  
      })