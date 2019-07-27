//start page
$( document ).ready(function() {
//start button which has on start function
    //countdown timer runs on click
    //displays questions from list below

        //object array of 8 questions *only one answer per question
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
    //submit button displays on the bottom

//when submit button is clicked
    //function to check question answers
    //post score
        //have a switch depending on scores
});
