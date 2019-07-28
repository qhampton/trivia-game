//start page
$(document).ready(function () {
    //questions on their own separate file- too long to put one 
    //submit button
    $(document).on("click","#finished", function(){
    game.done();
    });
    //----------------------------Timer -----------------------------
    //time variables- 5 minutes (300 seconds)
    var number = 15;
    var gameTime;

    //counts down in seconds from 300 and displays the time
    function countDown() {
        number--;
        $("#time-left").html("<h3> You have " + number + " seconds left!</h>");
        if (number === 0) {
        stop();
        }}

    //pulls the countDown function and rate  of decrease together
    function start() {
        gameTime = setInterval(countDown, 1000);
    }

    //what happens when time runs out
    function stop() {
        clearInterval(gameTime)
        game.result;
        console.log("Times Up");
    }
//-----Game variables and Functions -----------------
//how to check for answers -using a variable with methods within int to check each question to the answered checked and then showing the total
var game = {
    correct: 0,
    incorrect: 0,

    //calculates the correct and incorrect answers 
    done: function () {
        $.each($("input [name= 'question-0']:checked"), function () {
            if ($(this).val() == question[0].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input [name= 'question-1']:checked"), function () {
            if ($(this).val() == question[1].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input [name= 'question-2']:checked"), function () {
            if ($(this).val() == question[2].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input [name= 'question-3']:checked"), function () {
            if ($(this).val() == question[3].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input [name= 'question-4']:checked"), function () {
            if ($(this).val() == question[4].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input [name= 'question-5']:checked"), function () {
            if ($(this).val() == question[5].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        console.log(game.correct + " correct");
        console.log(game.incorrect + " incorrect");
        game.result();
    },
    //prints score to page
    result:function(){
        stop();
        $("#time-left").html("<h2>Times Up!</h2>");
        $("#questions-here").html("<h3> Correct answers: " + this.correct);
        $("#questions-here").append("<h3> Incorrect answers: " + this.incorrect);
        // if(this.correct > 6){
        //     $("#mainPic").attr("<img>", assets/images/you-win.gif);
        // }
        // else{
        //     $("#mainPic").attr("<img>", assets/images/you-lose.gif);
        // }
},
};

//---------------------Once Start Button Is Clicked-----------------------------
//once button is clicked it will hide and hide the main photo, bring questions and submit button up
$("#startGame").click(function () {
    //hide start button
    $("#startGame").hide();
    $("#mainPic").hide();

    //countdown timer runs on click
    start();

    //displays questions from other file
    for (var i = 0; i < questions.length; i++) {
        $("#questions-here").append("<h3>" + questions[i].question + "</h3>");
        for (var j = 0; j < questions[i].choices.length; j++) {
            $("#questions-here").append("<input type='radio' name='question-" + i + "' value='" + questions[i].choices[j] + "'>" + questions[i].choices[j] + "<br>");
        }
        $("#questions-here").append("<br>");
        }
    $("#questions-here").append("<button type='button' class='btn btn-primary btn-lg btn-block'  id='finished'>Finite!</button>");
});
});
