const readlineSync = require("readline-sync");
const chalk = require('chalk');

let score = 0;

let userName = readlineSync.question(chalk.blue.bold("What is your Name? "));

console.log(chalk.green("---------------"))
console.log(chalk.red(chalk`Welcome {green ${userName}} Do Yo Know Rushab? `));
 console.log(chalk.yellow("Lets Find Out"))
 console.log(chalk.green("-----------------------"))


function quiz(question, answer) {
  let userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log(chalk.cyan("You're right! "));
    score++;
  } else {
    console.log(chalk.bgRed("You're so wrong! "));
  }
    console.log(chalk.green("Your score is: ", score));
    console.log(chalk.green("-----------------------"))
}

let questions = [
  {
  question: `What is my Age? 
  a)22
  b)25
  c)21
  d)20 \n`,
  answer: "c"
},{
  question: `Which Food do I like? 
  a)pizza
  b)Pasta
  c)Maggi
  d)Chinese \n`,
  answer: "a"
}, {
  question: `Where do I live? 
  a)Bhiwandi
  b)Pune
  c)Bangalore
  d)Delhi \n`,
  answer: "a"
}, {
  question: `Which phone do I use? 
  a)Oneplus 7t
  b)Redmi Note 9
  c)Moto G6
  d)Realme \n`,
  answer: "a"
}, {
  question: `What do I like? 
  a)Tea
  b)Coffee
  c)Cola
  d)Jeera Masala Soda
  `,
  answer: "b"
}];

for (let i=0; i<questions.length; i++) {
  let currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.bgCyan.redBright.bold("Your Total score is :", score));
    console.log(chalk.green("-----------------------"))


if(score>3){
 console.log(chalk.bgWhite.redBright.bold('you know me we are bffs'));
}
else {
   console.log(chalk.redBright.bold('you need to know me!!'))
   }
