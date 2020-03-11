$(document).ready(function(){
    $("#answer").hide();
    var magic8Ball = {};
    magic8Ball.answersList = ["It is certain", "It is decidedly so", "Without a doubt", "Yes – definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]; 
  
    magic8Ball.askQuestion = function(ask) {
      var randomNum = Math.random();
      var randomNumAnswers = randomNum * this.answersList.length;
      
      var randomIndex = Math.floor(randomNumAnswers);
      
      var answer = this.answersList[randomIndex];
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
      $("#answer").fadeIn(4000);
      $("#answer").text( answer );
      
      console.log(ask);
      console.log(answer);
    };
  
  /* magic8Ball.askQuestion("Will I meet MADKID and JO1 anytime soon?"); */
    
    /* this should make the button clickable and a prompt window will appear */
    $("#answer").hide();
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
    var onClick = function() {
      $("#8ball").effect( "shake" );
       setTimeout(
          function() {
              var question = prompt("ASK A YES/NO QUESTION!");
      magic8Ball.askQuestion(question);
          }, 500);
    };
    $("#questionButton").click( onClick );
   
});
  