const quizData = [
	{
		question: 'What is JavaScript?',
		a: 'A programming language for the web',
		b: 'A markup language for documents',
		c: 'A scripting language for servers',
		d: 'A database management system',
		correct: 'a',
	},
	{
		question: "What is the result of the following expression: '1' + 2 + 3?",
		a: '6',
		b: '123',
		c: '15',
		d: 'TypeError',
		correct: 'b',
	},
	{
		question: "What is the difference between '==' and '===' in JavaScript?",
		a: "'==' compares only values, '===' compares both values and types",
		b: "'===' compares only values, '==' compares both values and types",
		c: "'==' and '===' are interchangeable",
		d: 'There is no difference',
		correct: 'a',
	},
	{
		question:
			'Which of the following is a correct way to add an element to the end of an array in JavaScript?',
		a: "arr.push('element')",
		b: "arr.add('element')",
		c: "arr.append('element')",
		d: "arr.insert('element')",
		correct: 'a',
	},
	{
		question:
			'What is the output of the following code: console.log(typeof undefined);',
		a: 'undefined',
		b: 'null',
		c: 'object',
		d: 'undefined',
		correct: 'd',
	},
	{
		question:
			'Which of the following is a correct way to define a function in JavaScript?',
		a: 'function myFunction() {}',
		b: 'myFunction = function() {}',
		c: 'myFunction() {}',
		d: 'function = myFunction() {}',
		correct: 'a',
	},
	{
		question:
			'Which of the following is a correct way to create a new object in JavaScript?',
		a: 'const obj = new Object();',
		b: 'const obj = {}',
		c: 'const obj = Object.create();',
		d: 'const obj = Object.new();',
		correct: 'b',
	},

	{
		question:
			'What is the difference between null and undefined in JavaScript?',
		a: 'There is no difference',
		b: 'null is a value that represents an intentional absence of any object value, while undefined is a value that represents an uninitialized or missing value',
		c: 'undefined is a value that represents an intentional absence of any object value, while null is a value that represents an uninitialized or missing value',
		d: 'null is a keyword, while undefined is a built-in function',
		correct: 'b',
	},
	{
		question: "What does the 'this' keyword refer to in JavaScript?",
		a: 'The current function',
		b: 'The global object',
		c: 'The calling object',
		d: 'The parent object',
		correct: 'c',
	},
	{
		question: 'What is a closure in JavaScript?',
		a: 'A function that has access to variables in its parent scope, even after the parent function has returned',
		b: 'A function that takes another function as an argument',
		c: 'A function that is called when an error occurs',
		d: 'A function that returns a new object',
		correct: 'a',
	},
	{
		question:
			'What is the difference between synchronous and asynchronous programming in JavaScript?',
		a: 'There is no difference',
		b: 'Synchronous programming blocks the execution until a task is completed, while asynchronous programming allows the execution to continue while the task is being completed',
		c: 'Synchronous programming allows for multiple tasks to be executed at the same time, while asynchronous programming only allows for one task at a time',
		d: 'Synchronous programming is faster than asynchronous programming',
		correct: 'b',
	},
	{
		question:
			'What is the difference between call() and apply() in JavaScript?',
		a: 'There is no difference',
		b: 'call() takes arguments as an array, while apply() takes arguments as individual parameters',
		c: 'apply() takes arguments as an array, while call() takes arguments as individual parameters',
		d: 'call() and apply() are used for the same purpose',
		correct: 'c',
	},
	{
		question: 'What is a promise in JavaScript?',
		a: 'A function that takes another function as an argument',
		b: 'A function that returns a new object',
		c: 'An object that represents a value that may not be available yet, but will be resolved at some point in the future',
		d: 'An object that is used for error handling',
		correct: 'c',
	},
	{
		question: 'What is event bubbling in JavaScript?',
		a: 'The propagation of an event from a child element to its parent element',
		b: 'The propagation of an event from a parent element to its child element',
		c: 'The propagation of an event to all elements on the page',
		d: 'The propagation of an event to elements with the same class name',
		correct: 'a',
	},

	{
		question:
			"What is the purpose of the 'use strict' directive in JavaScript?",
		a: 'To enable strict mode in the current scope',
		b: 'To disable strict mode in the current scope',
		c: 'To import external code into the current scope',
		d: 'To export code from the current scope to other modules',
		correct: 'a',
	},
	{
		question: 'What is a higher-order function in JavaScript?',
		a: 'A function that takes another function as an argument or returns a function',
		b: 'A function that is defined inside another function',
		c: 'A function that is called when an error occurs',
		d: 'A function that has access to variables in its parent scope, even after the parent function has returned',
		correct: 'a',
	},
	{
		question:
			'What is the difference between var, let, and const in JavaScript?',
		a: 'There is no difference',
		b: 'var is used for global variables, let is used for local variables, and const is used for constant values',
		c: 'let is used for global variables, const is used for local variables, and var is used for constant values',
		d: 'const is used for global variables, var is used for local variables, and let is used for constant values',
		correct: 'b',
	},
	{
		question:
			'What is the difference between map() and filter() in JavaScript?',
		a: 'There is no difference',
		b: 'map() creates a new array with the results of calling a provided function on every element, while filter() creates a new array with all elements that pass the test implemented by the provided function',
		c: 'filter() creates a new array with the results of calling a provided function on every element, while map() creates a new array with all elements that pass the test implemented by the provided function',
		d: 'map() and filter() are used for the same purpose',
		correct: 'b',
	},
	{
		question:
			'What is the difference between an arrow function and a regular function in JavaScript?',
		a: 'There is no difference',
		b: "An arrow function has a simpler syntax, does not bind its own 'this', and cannot be used as a constructor, while a regular function can be used as a constructor",
		c: "A regular function has a simpler syntax, does not bind its own 'this', and cannot be used as a constructor, while an arrow function can be used as a constructor",
		d: 'An arrow function and a regular function are interchangeable',
		correct: 'b',
	},
	{
		question:
			"What is the purpose of the 'async' and 'await' keywords in JavaScript?",
		a: 'To create a new instance of a class',
		b: 'To handle errors in asynchronous code',
		c: 'To define a function that can be called later',
		d: 'To simplify asynchronous code by allowing it to be written in a synchronous style',
		correct: 'd',
	},
];


const quiz = document.getElementById('quiz');
const aAnswer = document.getElementById('a_answer')
const bAnswer = document.getElementById('b_answer')
const cAnswer = document.getElementById('c_answer')
const dAnswer = document.getElementById('d_answer')
const submitBtn = document.getElementById('submit')
const answers = document.querySelectorAll('.answer')
const question = document.getElementById('question')

let currentQuestion = 0
let score = 0
const selectedQuestions = getRandomQuestions(quizData, 10); // select 10 random questions

openQuiz()

function openQuiz() {
	deselectAnswers()
	const currentData = selectedQuestions[currentQuestion];
	question.innerText = currentData.question;
	aAnswer.innerText = currentData.a;
	bAnswer.innerText = currentData.b;
	cAnswer.innerText = currentData.c;
	dAnswer.innerText = currentData.d;
  }

function getRandomQuestions(data, count) {
  const questions = data.slice(0); //copy of the array
  const selectedQuestions = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions.splice(randomIndex, 1)[0];
    selectedQuestions.push(randomQuestion);
  }
  return selectedQuestions;
}

function selectedAnswer() {
	let option;
	//looping over radio buttons, if the one is checked, check the id of the selected option
	for (let i = 0; i < answers.length; i++) {
	  if (answers[i].checked) {
		option = answers[i].id;
		break;
	  }
	}
	return option;
}

function deselectAnswers() {
    answers.forEach(answers => answers.checked = false)
}

submitBtn.addEventListener('click', function() {
	const answer = selectedAnswer()
	if(answer){
	if(answer === selectedQuestions[currentQuestion].correct){
		score++;
	}

	currentQuestion++;

	if(currentQuestion < selectedQuestions.length) {
		openQuiz()
	} else if (score<5) {
		quiz.innerHTML = `<h2>You answered ${score}/${selectedQuestions.length} questions correctly</h2>
		<img src="./images/fail.gif" id="img">
		<button onclick="location.reload()">New quiz</button>`
	} else if(score>=5){
		quiz.innerHTML = `<h2>You answered ${score}/${selectedQuestions.length} questions correctly</h2>
		<img src="./images/congrats.gif" id="img">
		<button onclick="location.reload()">New quiz</button>`
	}
}
	
})
