//start page
$(document).ready(function () {
    var number = 15;
    var gameTime;
    var correct = 0;
    var incorrect = 0;
//submit button
$(document).on("click","#finished", function(){
    gameDone();
    stop();
    });
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

function gameDone(){
    for(var i=0;i <questions.length;i++){
        if($('input[name="question-'+i+'"]:checked').val() === questions[i].answer){
            correct++;
        }
        else{
            incorrect++;
        
        }
    }
}

function result(){
    $("#time-left").html("<h2>Times Up!</h2>");
        $("#questions-here").html("<h3> Correct answers: " + correct);
        $("#questions-here").append("<h3> Incorrect answers: " + incorrect);
        if(correct >= 6){
            $("#mainPic").attr("src", "assets/images/you-win.gif");
        }
        else{
            $("#mainPic").attr("src", "assets/images/you-lose.gif");
        }
}
function start() {
    gameTime = setInterval(countDown, 1000);
}
//what happens when time runs out
function stop() {
    clearInterval(gameTime);
    result();
    console.log("Times Up");
}
function countDown() {
    number--;
    $("#time-left").html("<h3> You have " + number + " seconds left!</h>");
    if (number === 0) {
        gameDone();
    stop();
    }}
});
