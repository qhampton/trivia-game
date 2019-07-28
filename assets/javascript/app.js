//start page
$(document).ready(function () {
    //questionstheir own seperate file- too long to put one one 
    //----------------------------Timer -----------------------------
    //time variables- 5 minutes (300 seconds)
    var number = 15;
    var gameTime;

    //counts down in seconds from 300 and displas the time
    function countDown() {
        number--;
        $("#time-left").html("<h3> You have " + number + " seconds left!</h>");
        if (number === 0) {
            stop();
        }
    }

    //pulls the countDown function and rate  of decrease together
    function start() {
        gameTime = setInterval(countDown, 1000);
    }
    
    //what happens when time runs out
    function stop() {
        clearInterval(gameTime);
        console.log("Times Up!");
        game.result;
    }
    //-----Game variables and Functions -----------------
    //how to check for answers -using a variable with methonds within int to check each question to th answered checked and then showing the total
    var game = {
        correct: 0,
        incorrect: 0, 

        //calculates the correct and incorrect answers 
        done: function(){
            $.each($("input [name= 'question-1':checked")),
            function(){
                if($(this).val()==question[0].answer){
                    game.correct++;
                }
                else{
                    game.incorrect++;
                }
            this.result();
            }},

        //prints score to page
        result: function(){
            clearInterval(gameTime)
            $("time-left").html("Donee")
            $("#questions-here").append("<h3> Correct answers: " + this.correcet);
            $("#questions-here").append("<h3> Correct answers: " + this.incorrecet);
            // if(this.correct > 6){
            //     $("#mainPic").attr("<img>", assets/images/you-win.gif);
            // }
            // else{
            //     $("#mainPic").attr("<img>", assets/images/you-lose.gif);
            // }
        },
    }

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
                $("#questions-here").append("<input type='radio' name='question- " + i + "' value='" + questions[i].choices[j] + "'>" + questions[i].choices[j] + "<br>");
            }
            $("#questions-here").append("<br>");
        }
        //submit button displays on the bottom
        var quizEnd = $("<button/>",
        {
            class: "btn btn-primary btn-lg btn-block",
            text: "Finite!",
            click: function () {}
        });
        $("#submit").prepend(quizEnd);
    });
});