var readlineSync = require('readline-sync');
var score = 0;
// index = readlineSync.keyInSelect(frameworks, 'Which framework?');
var userName = readlineSync.question('May i have your name?');
console.log('Hi ' + userName + ' welcome to the IPL quiz...best of luck!');

var quizQuestions = [{
  question: 'Who is captain of Mumbai Indians',
  options: ['Suresh raina', 'Rohit Sharma', 'Virat Kohli', 'Sachin'],
  answer: 'Rohit Sharma'
}, {
  question: 'Which team won the First IPL?', options: ['Rajasthan Royals', 'CSK', 'RCB', 'KKR'],
  answer: 'Rajasthan Royals'
},
{
  question: 'Where was the second IPL held?',
  options: ['UAE', 'Australia', 'Pakistan', 'South Africa'],
  answer: 'South Africa'
},
{
  question: ' Which team in the IPL has never changed its captain?',
  options: ['Rajasthan Royals', 'CSK', 'RCB', 'KKR'],
  answer: 'CSK'
},
{
  question: 'Who was the first Indian IPL player to score a hundred?',
  options: ['Rohit Sharma', 'Virat Kohli', 'Sachin', 'Manish Pandey'],
  answer: 'Manish Pandey'
}
];


function play(question, options, answer) {
  var userAnswer = readlineSync.keyInSelect(options, question)
  console.log('your answer is ' + options[userAnswer]);


  if (options[userAnswer] === answer) {
    console.log('correct! well done.');
    score += 1;
  }
  else {
    console.log('wrong!');
    score += -1;
  }
  console.log('Currentscore: ' + score);
  console.log('________')
}

for (var i = 0; i < quizQuestions.length; i++) {
  var currentQuestion = quizQuestions[i];
  play(currentQuestion.question, currentQuestion.options, currentQuestion.answer);
}
console.log('Game over! Your final score is: ' + score);