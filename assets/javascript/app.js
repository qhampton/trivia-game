//start page
$( document ).ready(function() {
//list of questions in array of objects
var quizQuestions = [
    {question:"What is Harry Potter's first pet?",
    choices:["cat", "toad", "owl", "rat"],
    answer:"Owl"
    },
    {question:"There are 7 Weasley siblings.",
    choices:["True", "False"],
    answer:"True"
    },
    {question:"How can a house elf be freed?",
    choices:["Nothing", "Clothing from their Master", "After a certain age", "A gift from their Master"],
    answer:"Clothing from their Master"
    },
    {question:"What are Hermione's parents occuption?",
    choices:["Dentists", "Teachers","Doctors", "Solisitors"],
    answer:"Dentists"
    },
    {question:"What position does Ron play in quidditch?",
    choices:["Seeker", "Beater", "Chaser", "Keeper"],
    answer:"Keeper"
    },
    {question:"Harry and Voldemort are related.",
    choices:["True", "False"],
    answer:"True"
    },
    {question:"Who does Harry Potter meet first from the Wizarding World (not including his parents)?",
    choices:["Ron", "Hermione", "Neville", "Malfoy"],
    answer:"Malfoy"
    },
    {question:"When did the battle of Hogwarts take place?",
    choices:["1850", "2010","1760","1998"],
    answer:"1998",
    }];
console.log(quizQuestions);

//time variables- 5 minutes
var number = 300;
var gameTime;
//counts down in seconds from 300 and displas the time
function countDown(){
    number--;
    $("#time-left").html("<h3> You have " + number + " seconds left!</h>");
    if (number === 0) {
    stop();}
}
//pulls the countDown function and rate  of decrease together
function start() {
    gameTime = setInterval(countDown, 1000);
}
//what happens when time runs out
function stop(){
    clearInterval(gameTime);
}

//start button which has on start function
$("#startGame").click(function(){
    //hide start button
    $("#startGame").hide();
    //countdown timer runs on click
    start();
    //displays questions from list above
    for (var i=0; i < quizQuestions.length; i++){
    $("#questions-here").append("<h3>" + quizQuestions[i].question + "</h3>");
        for (var j=0; j < quizQuestions[i].choices.length; j++){
        $("#questions-here").append("<input type='radio' name='question- "+i+"' value='"+quizQuestions[i].choices[j]+"'>"+quizQuestions[i].choices[j]+"<br>");
    }
    $("#questions-here").append("<br>");
    }
        //object array of 8 questions *only one answer per question
    //submit button displays on the bottom
    var quizEnd = $("<button/>",
    {
        class: "btn btn-primary btn-lg btn-block",
        text: "Finite!",
        click: function () {}
    });
    $("#submit").prepend(quizEnd);
});
//when submit button is clicked
    //function to check question answers
    //post score
        //have a switch depending on scores
});
