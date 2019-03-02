/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/


//Function constructor for the questions
var Question = function (question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;

}

//Array of Questions
var questions = [new Question('Which year is it?', [2011, 2014, 2018], 2),
                new Question('Which days is it?', ['Monday', 'Thursday', 'Tuesday'], 1),
                new Question('Color of the sky?', ['Blue', 'Green', 'Yellow'], 0)];

/*
This function selects a random question and returns it
*/
function selectRandomQuestion() {
    var elementLocation = Math.floor(Math.random() * 3);
    return questions[elementLocation];
}


//Select a question



//Print on console
Question.prototype.printOnConsole = function (question) {
    console.log('_____________________________');
    for (var i = 0; i < question.answers.length; i++) {
        console.log(i + ' - ' + question.answers[i]);
    }
}

function printResult(resultTrue) {
    if (resultTrue) {
        console.log("You got it right!");
    } else {
        console.log("You got it wrong :-( . Try again.");
    }

}
//Use a IIFE to run the game

(function () {
    var continueLoop = true;
    var score = 0;
    console.log("   T R A P    ")
    do {
        var selectedQuestion = selectRandomQuestion();
        selectedQuestion.printOnConsole(selectedQuestion);
        input = prompt(selectedQuestion.question);
        if (input === 'exit') {
            continueLoop = false;
            break;
        } else {
            var result = (input == selectedQuestion.correctAnswer);
            if (result)
                score++;
            printResult(result);
            console.log('Current Score=' + score);

        }
    }
    while (continueLoop);
})();




//////////
//Call Bind and Apply

//var john = {
//    name: 'John',
//    age: 26,
//    job: 'teacher',
//    presentation: function (style, timeOfDay) {
//        if (style === 'formal') {
//            console.log('Good' + timeOfDay + 'Ladies and Gentlemen, I\'m ' +
//                this.name + 'I\'m a ' + this.job + ', and I am ' + this.age);
//        } else if (style === 'friendly') {
//            console.log("Hey whatsup! I am " +
//                this.name + " I am " + this.age + ", I am a " + this.job + '. Have a nice ' + timeOfDay);
//        }
//    }
//
//
//
//}
//
//john.presentation('friendly', 'morning');
//
//var emily = {
//    name: 'Emily',
//    age: 23,
//    job: 'CEO',
//}
//
//john.presentation.call(emily, 'friendly', 'afternoon');
////john.presentation.apply(emily, ['friendly', 'afternoon'])
//var johnFriendly = john.presentation.bind(john, 'friendly');
//johnFriendly('morning');


//Function constructor
//
//var john = {
//    name: 'John',
//    yearOfBirth: 1990,
//    job: 'teacher'
//};
//
//var Person = function (name, yearOfBirth, job) {
//    this.name = name;
//    this.yearOfBirth = yearOfBirth;
//    this.job = job;
////    this.calculateAge = function () {
//        //        console.log(2018 - this.yearOfBirth);
//        //    };
//}
//
//Person.prototype.calculateAge = function () {
//    console.log(2018 - this.yearOfBirth);
//};
//
//var john = new Person('john', 1990, 'teacher');
//john.calculateAge();
//
//var jane = new Person('jane', 1969, 'designer');
//var mark = new Person('mark', 1948, 'retired');
//
//jane.calculateAge();
//mark.calculateAge();


//Passing functions as arguments

//var years = [1990, 1965, 1937, 2005, 1998];
//function arrayCalc(arr, fn) {
//    var resultArray = [];
//    for (var i = 0; i < arr.length; i++) {
//        resultArray.push(fn(arr[i]));
//    }
//    return resultArray;
//}
//
//function calculateAge(year) {
//    return 2016 - year;
//}
//
//
//var result = arrayCalc(years, calculateAge);
//console.log(result)

//Function returning another function

//function interviewQuestions(job) {
//    switch (job) {
//        case 'designer':
//            return function (name) {
//                console.log(name + " ,can you please explain what UX design is?")
//            };
//        case 'teacher':
//            return function (name) {
//                console.log(name + " , what subject do you teach?");
//            }
//        default:
//            return function (name) {
//                console.log(name + " , what do you do?");
//            }
//    }
//
//}
//var teacherQuestiopn = interviewQuestions('teacher');
//teacherQuestiopn("Henry");


/////////////////////////
//IIFe


//function game() {
//    var score = Math.random() * 10;
//    console.log(score >= 5);
//
//}
//
//
//game();
//console.log(score);

//game();
//(function () {
//    var score = Math.random() * 10;
//    console.log(score >= 5);
//})();


//Closures
//function retirement(retirementage) {
//    var a = ' years left until retirement';
//    return function (yearOfBirth) {
//        var age = 2018 - yearOfBirth;
//        console.log((retirementage - age) + a);
//    }
//}
//
////retirement(65)(1965);
//
//function interviewQuestions(job) {
//    var designQuestion = ' ,can you please explain what UX design is?';
//    var teacherQuestion = ' , what subject do you teach?';
//    var defaultQuestion = ' , what do you do?';
//    switch (job) {
//        case 'designer':
//            return function (name) {
//                console.log(name + designQuestion);
//            };
//        case 'teacher':
//            return function (name) {
//                console.log(name + teacherQuestion);
//            };
//        default:
//            return function (name) {
//                console.log(name + defaultQuestion);
//            };
//    }
//}
//console.log(interviewQuestions('teacher')('Henry'));
