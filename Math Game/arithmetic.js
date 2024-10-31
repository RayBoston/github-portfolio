/*
This is a math game, the first prompt will ask you for the operation that you want to work on: add , subract, multiply, divide, or find the remainder.
The user chooses and is given a series of math problems to solve.
*/

let operation = prompt('Welcome to Arithmetic, a math game that tests your ability to add, subtract, multiplay, and divide integers. Start by selecting the operation that you want questions for, then hit "Math" whenever you want a new question. For Addition, type "A", Subtraction, type "S", Multiplication, type "M", Division, type "D", or to find the Remainder, type "R". Earn points by getting correct answers which will move you up in rank.');

	if (operation === null) {	
			document.getElementById("yourAnswer").innerHTML = 'Refresh your browser or press "Play" whenever you are ready.';
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "Times New Roman";
			document.getElementById("yourAnswer").style.boxShadow = "none";
	} else if (operation.split(' ').join('') === "") {
			document.getElementById("yourAnswer").innerHTML = 'To begin, refresh the browser or press the "Play" button.';
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "georgia";
			document.getElementById("yourAnswer").style.boxShadow = "none";
	} else if (operation.split(' ').join('').toUpperCase() !== "A" && operation.split(' ').join('').toUpperCase() !== "S" && 
	operation.split(' ').join('').toUpperCase() !== "M" && operation.split(' ').join('').toUpperCase() !== "D"
	&& operation.split(' ').join('').toUpperCase() !== "R"){
			document.getElementById("yourAnswer").innerHTML = "Make sure that you read the directions carefully.";
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "Trebuchet MS";
			document.getElementById("yourAnswer").style.boxShadow = "none";
		}

let difficulty = 13;
let attempts = 0;
let correctAnswers = 0;
let score;
let grade;
let points = 0;
let rank;

function findScore() {
		if (Math.round(grade) >= 97 && Math.round(grade) <= 100){
	score = "A+";
	} else if (Math.round(grade) >= 93 && Math.round(grade) <= 96){
	score = "A";
	} else if (Math.round(grade) >= 90 && Math.round(grade) <= 92){
	score = "A-";
	} else if (Math.round(grade) >= 87 && Math.round(grade) <= 89){
	score = "B+";
	} else if (Math.round(grade) >= 83 && Math.round(grade) <= 86){
	score = "B";
	} else if (Math.round(grade) >= 80 && Math.round(grade) <= 82){
	score = "B-";
	} else if (Math.round(grade) >= 77 && Math.round(grade) <= 79){
	score = "C+";
	} else if (Math.round(grade) >= 73 && Math.round(grade) <= 76){
	score = "C";
	} else if (Math.round(grade) >= 70 && Math.round(grade) <= 72){
	score = "C-";
	} else if (Math.round(grade) >= 67 && Math.round(grade) <= 69){
	score = "D+";
	} else if (Math.round(grade) >= 63 && Math.round(grade) <= 66){
	score = "D";
	} else if (Math.round(grade) >= 60 && Math.round(grade) <= 62){
	score = "D-";
	} else {
	score = "F";
	}
}

const rankingSystem = () => {
	 if (points >= 0 && points < 625) {
		rank = "Student";
	} else if (points >= 625 && points < 1250) {
		rank = "Tutor";
	} else if (points >= 1250 && points < 2500) {
		rank = "Valedictorian";
	} else if (points >= 2500 && points < 5000) {
		rank = "Teacher";
	} else if (points >= 5000 && points < 10000) {
		rank = "Professor";
	} else if (points >= 10000) {
		rank = "Mathematician";
	} else {
		rank = "--";
	}
	/**if (points >= 0 && points < 50) {
		rank = "Student";
	} else if (points >= 50 && points < 100) {
		rank = "Tutor";
	} else if (points >= 100 && points < 150) {
		rank = "Valedictorian";
	} else if (points >= 150 && points < 200) {
		rank = "Teacher";
	} else if (points >= 200 && points < 250) {
		rank = "Professor";
	} else if (points >= 250) {
		rank = "Mathematician";
	} else {
		rank = "--";
	}**/
}

function mathTest() {
	let firstNumber = Math.floor(Math.random() * difficulty);
	let secondNumber = Math.floor(Math.random() * difficulty);
	if (operation.split(' ').join('').toUpperCase() === "A") {
		let answerA = prompt(`What is ${firstNumber} + ${secondNumber}?`);
		if(answerA === null) {
			document.getElementById("yourAnswer").innerHTML = 'You can change operations by pressing the "Play" button.';
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "Times New Roman";
			document.getElementById("yourAnswer").style.boxShadow = "none";
		} else if (answerA.split(' ').join('') === "") {
			document.getElementById("yourAnswer").innerHTML = 'Push the "Math" button again for a different question.';
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "georgia";
			document.getElementById("yourAnswer").style.boxShadow = "none";
		} else if (isNaN(parseFloat(answerA.split(' ').join(''))) === true) {
			document.getElementById("yourAnswer").innerHTML = "Only use numbers in your answer.";
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "Trebuchet MS";
			document.getElementById("yourAnswer").style.boxShadow = "none";
		} else if (parseFloat(answerA.split(' ').join('')) === (firstNumber + secondNumber)) {
			attempts += 1;
			correctAnswers += 1;
			grade = (correctAnswers/attempts) * 100;
			findScore();
			switch (difficulty){
			case 1001:
			points += 200;
			break;
			case 101:
			points += 100;
			break;
			default:
			points += 10;
			}
			rankingSystem();
			if (rank === "Mathematician" && score === "A+") {
				alert("Congratulations! You're an A+ Mathematician. You've mastered the game but you can continue playing for as long as you want for practice.");
			}
			document.getElementById("Score").innerHTML = "Score: " + score;
			document.getElementById("Score2").innerHTML = "Correct: " + correctAnswers;
			document.getElementById("Score3").innerHTML = "Questions: " + attempts;
			document.getElementById("rank").innerHTML = "Rank: " + rank;
			document.getElementById("points").innerHTML = "Points: " + points;
			document.getElementById("yourAnswer").innerHTML = "You got it right!";
			document.getElementById("yourAnswer").style.color = "green";
			document.getElementById("yourAnswer").style.borderColor = "green";
			document.getElementById("yourAnswer").style.fontFamily = "garamond";
			document.getElementById("yourAnswer").style.boxShadow = "0 0 10px 5px #19ff6e";
		} 	else {
			attempts += 1;
			grade = (correctAnswers/attempts) * 100;
			findScore();
			switch (difficulty){
			case 1001:
			points -= 100;
			break;
			case 101:
			points -= 50;
			break;
			default:
			points -= 5;
			}
			rankingSystem();
			document.getElementById("Score").innerHTML = "Score: " + score;
			document.getElementById("Score2").innerHTML = "Correct: " + correctAnswers;
			document.getElementById("Score3").innerHTML = "Questions: " + attempts;
			document.getElementById("rank").innerHTML = "Rank: " + rank;
			document.getElementById("points").innerHTML = "Points: " + points;
			document.getElementById("yourAnswer").innerHTML = "Oh no! You got it wrong.";
			document.getElementById("yourAnswer").style.color = "red";
			document.getElementById("yourAnswer").style.borderColor = "red";
			document.getElementById("yourAnswer").style.fontFamily = "courier new";
			document.getElementById("yourAnswer").style.boxShadow = "0 0 10px 5px #ff4530";
		}		
	} else if (operation.split(' ').join('').toUpperCase() === "S") {
		let answerS = prompt(`What is ${firstNumber} - ${secondNumber}?`);
		if(answerS === null) {
			document.getElementById("yourAnswer").innerHTML = 'You can change operations by pressing the "Play" button.';
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "Times New Roman";
			document.getElementById("yourAnswer").style.boxShadow = "none";
		} else if (answerS.split(' ').join('') === "") {
			document.getElementById("yourAnswer").innerHTML = 'Push the "Math" button again for a different question.';
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "georgia";
			document.getElementById("yourAnswer").style.boxShadow = "none";
		} else if (isNaN(parseFloat(answerS.split(' ').join(''))) === true) {
			document.getElementById("yourAnswer").innerHTML = "Only use numbers in your answer.";
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "Trebuchet MS";
			document.getElementById("yourAnswer").style.boxShadow = "none";
		} else if (parseFloat(answerS.split(' ').join('')) === (firstNumber - secondNumber)) {
			attempts += 1;
			correctAnswers += 1;
			grade = (correctAnswers/attempts) * 100;
			findScore();
			switch (difficulty){
			case 1001:
			points += 300;
			break;
			case 101:
			points += 150;
			break;
			default:
			points += 20;
			}
			rankingSystem();
			if (rank === "Mathematician" && score === "A+") {
				alert("Congratulations! You're an A+ Mathematician. You've mastered the game but you can continue playing for as long as you want for practice.");
			}
			document.getElementById("Score").innerHTML = "Score: " + score;
			document.getElementById("Score2").innerHTML = "Correct: " + correctAnswers;
			document.getElementById("Score3").innerHTML = "Questions: " + attempts;
			document.getElementById("rank").innerHTML = "Rank: " + rank;
			document.getElementById("points").innerHTML = "Points: " + points;
			document.getElementById("yourAnswer").innerHTML = "You got it right!";
			document.getElementById("yourAnswer").style.color = "green";
			document.getElementById("yourAnswer").style.borderColor = "green";
			document.getElementById("yourAnswer").style.fontFamily = "garamond";
			document.getElementById("yourAnswer").style.boxShadow = "0 0 10px 5px #19ff6e";
		} else {
			attempts += 1;
			grade = (correctAnswers/attempts) * 100;
			findScore();
			switch (difficulty){
			case 1001:
			points -= 150;
			break;
			case 101:
			points -= 75;
			break;
			default:
			points -= 10;
			}
			rankingSystem();
			document.getElementById("Score").innerHTML = "Score: " + score;
			document.getElementById("Score2").innerHTML = "Correct: " + correctAnswers;
			document.getElementById("Score3").innerHTML = "Questions: " + attempts;
			document.getElementById("rank").innerHTML = "Rank: " + rank;
			document.getElementById("points").innerHTML = "Points: " + points;
			document.getElementById("yourAnswer").innerHTML = "Oh no! You got it wrong.";
			document.getElementById("yourAnswer").style.color = "red";
			document.getElementById("yourAnswer").style.borderColor = "red";
			document.getElementById("yourAnswer").style.fontFamily = "courier new";
			document.getElementById("yourAnswer").style.boxShadow = "0 0 10px 5px #ff4530";
		}
	} else if (operation.split(' ').join('').toUpperCase() === "M") {
		let answerM = prompt(`What is ${firstNumber} x ${secondNumber}?`);
		if(answerM === null) {
			document.getElementById("yourAnswer").innerHTML = 'You can change operations by pressing the "Play" button.';
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "Times New Roman";
			document.getElementById("yourAnswer").style.boxShadow = "none";
		} else if (answerM.split(' ').join('') === "") {
			document.getElementById("yourAnswer").innerHTML = 'Push the "Math" button again for a different question.';
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "georgia";
			document.getElementById("yourAnswer").style.boxShadow = "none";
		} else if (isNaN(parseFloat(answerM.split(' ').join(''))) === true) {
			document.getElementById("yourAnswer").innerHTML = "Only use numbers in your answer.";
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "Trebuchet MS";
			document.getElementById("yourAnswer").style.boxShadow = "none";
		} else if (parseFloat(answerM.split(' ').join('')) === (firstNumber * secondNumber)) {
			attempts += 1;
			correctAnswers += 1;
			grade = (correctAnswers/attempts) * 100;
			findScore();
			switch (difficulty){
			case 1001:
			points += 500;
			break;
			case 101:
			points += 250;
			break;
			default:
			points += 50;
			}
			rankingSystem();
			if (rank === "Mathematician" && score === "A+") {
				alert("Congratulations! You're an A+ Mathematician. You've mastered the game but you can continue playing for as long as you want for practice.");
			}
			document.getElementById("Score").innerHTML = "Score: " + score;
			document.getElementById("Score2").innerHTML = "Correct: " + correctAnswers;
			document.getElementById("Score3").innerHTML = "Questions: " + attempts;
			document.getElementById("rank").innerHTML = "Rank: " + rank;
			document.getElementById("points").innerHTML = "Points: " + points;
			document.getElementById("yourAnswer").innerHTML = "You got it right!";
			document.getElementById("yourAnswer").style.color = "green";
			document.getElementById("yourAnswer").style.borderColor = "green";
			document.getElementById("yourAnswer").style.fontFamily = "garamond";
			document.getElementById("yourAnswer").style.boxShadow = "0 0 10px 5px #19ff6e";
		} else {
			attempts += 1;
			grade = (correctAnswers/attempts) * 100;
			findScore();
			switch (difficulty){
			case 1001:
			points -= 250;
			break;
			case 101:
			points -= 125;
			break;
			default:
			points -= 25;
			}
			rankingSystem();
			document.getElementById("Score").innerHTML = "Score: " + score;
			document.getElementById("Score2").innerHTML = "Correct: " + correctAnswers;
			document.getElementById("Score3").innerHTML = "Questions: " + attempts;
			document.getElementById("rank").innerHTML = "Rank: " + rank;
			document.getElementById("points").innerHTML = "Points: " + points;
			document.getElementById("yourAnswer").innerHTML = "Oh no! You got it wrong.";
			document.getElementById("yourAnswer").style.color = "red";
			document.getElementById("yourAnswer").style.borderColor = "red";
			document.getElementById("yourAnswer").style.fontFamily = "courier new";
			document.getElementById("yourAnswer").style.boxShadow = "0 0 10px 5px #ff4530";
		}
	} else if (operation.split(' ').join('').toUpperCase() === "D") {
		if (secondNumber > firstNumber) {
			if (firstNumber === 0) {
			firstNumber += 1;
			}
			let answerD = prompt(`What is ${secondNumber} divided by ${firstNumber}? (Remember to round down and only use integers. For example, if the accurate answer is 1.5 then the correct one is 1)`);
			if(answerD === null) {
			document.getElementById("yourAnswer").innerHTML = 'You can change operations by pressing the "Play" button.';
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "Times New Roman";
			document.getElementById("yourAnswer").style.boxShadow = "none";
			} else if (answerD.split(' ').join('') === "") {
			document.getElementById("yourAnswer").innerHTML = 'Push the "Math" button again for a different question.';
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "georgia";
			document.getElementById("yourAnswer").style.boxShadow = "none";
			} else if (isNaN(parseFloat(answerD.split(' ').join(''))) === true) {
			document.getElementById("yourAnswer").innerHTML = "Only use numbers in your answer.";
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "Trebuchet MS";
			document.getElementById("yourAnswer").style.boxShadow = "none";
			} else if (parseFloat(answerD.split(' ').join('')) === (Math.floor((secondNumber) / (firstNumber)))) {
			attempts += 1;
			correctAnswers += 1;
			grade = (correctAnswers/attempts) * 100;
			findScore();
			switch (difficulty){
			case 1001:
			points += 150;
			break;
			case 101:
			points += 75;
			break;
			default:
			points += 30;
			}
			rankingSystem();
			if (rank === "Mathematician" && score === "A+") {
				alert("Congratulations! You're an A+ Mathematician. You've mastered the game but you can continue playing for as long as you want for practice.");
			}
			document.getElementById("Score").innerHTML = "Score: " + score;
			document.getElementById("Score2").innerHTML = "Correct: " + correctAnswers;
			document.getElementById("Score3").innerHTML = "Questions: " + attempts;
			document.getElementById("rank").innerHTML = "Rank: " + rank;
			document.getElementById("points").innerHTML = "Points: " + points;
			document.getElementById("yourAnswer").innerHTML = "You got it right!";
			document.getElementById("yourAnswer").style.color = "green";
			document.getElementById("yourAnswer").style.borderColor = "green";
			document.getElementById("yourAnswer").style.fontFamily = "garamond";
			document.getElementById("yourAnswer").style.boxShadow = "0 0 10px 5px #19ff6e";
			} else {
			attempts += 1;
			grade = (correctAnswers/attempts) * 100;
			findScore();
			switch (difficulty){
			case 1001:
			points -= 75;
			break;
			case 101:
			points -= 35;
			break;
			default:
			points -= 15;
			}
			rankingSystem();
			document.getElementById("Score").innerHTML = "Score: " + score;
			document.getElementById("Score2").innerHTML = "Correct: " + correctAnswers;
			document.getElementById("Score3").innerHTML = "Questions: " + attempts;
			document.getElementById("rank").innerHTML = "Rank: " + rank;
			document.getElementById("points").innerHTML = "Points: " + points;
			document.getElementById("yourAnswer").innerHTML = "Oh no! You got it wrong.";
			document.getElementById("yourAnswer").style.color = "red";
			document.getElementById("yourAnswer").style.borderColor = "red";
			document.getElementById("yourAnswer").style.fontFamily = "courier new";
			document.getElementById("yourAnswer").style.boxShadow = "0 0 10px 5px #ff4530";
			}
		} else {
			if (secondNumber === 0) {
			secondNumber += 1;
			}
			let answerD = prompt(`What is ${firstNumber} divided by ${secondNumber}? (Remember to round down and only use integers. For example, if the accurate answer is 1.5 then the correct one is 1)`);
			if(answerD === null) {
			document.getElementById("yourAnswer").innerHTML = 'You can change operations by pressing the "Play" button.';
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "Times New Roman";
			document.getElementById("yourAnswer").style.boxShadow = "none";
			} else if (answerD.split(' ').join('') === "") {
			document.getElementById("yourAnswer").innerHTML = 'Push the "Math" button again for a different question.';
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "georgia";
			document.getElementById("yourAnswer").style.boxShadow = "none";
			} else if (isNaN(parseFloat(answerD.split(' ').join(''))) === true) {
			document.getElementById("yourAnswer").innerHTML = "Only use numbers in your answer.";
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "Trebuchet MS";
			document.getElementById("yourAnswer").style.boxShadow = "none";
			} else if (parseFloat(answerD.split(' ').join('')) === (Math.floor((firstNumber) / (secondNumber)))) {
			attempts += 1;
			correctAnswers += 1;
			grade = (correctAnswers/attempts) * 100;
			findScore();
			switch (difficulty){
			case 1001:
			points += 150;
			break;
			case 101:
			points += 75;
			break;
			default:
			points += 30;
			}
			rankingSystem();
			if (rank === "Mathematician" && score === "A+") {
				alert("Congratulations! You're an A+ Mathematician. You've mastered the game but you can continue playing for as long as you want for practice.");
			}
			document.getElementById("Score").innerHTML = "Score: " + score;
			document.getElementById("Score2").innerHTML = "Correct: " + correctAnswers;
			document.getElementById("Score3").innerHTML = "Questions: " + attempts;
			document.getElementById("rank").innerHTML = "Rank: " + rank;
			document.getElementById("points").innerHTML = "Points: " + points;
			document.getElementById("yourAnswer").innerHTML = "You got it right!";
			document.getElementById("yourAnswer").style.color = "green";
			document.getElementById("yourAnswer").style.borderColor = "green";
			document.getElementById("yourAnswer").style.fontFamily = "garamond";
			document.getElementById("yourAnswer").style.boxShadow = "0 0 10px 5px #19ff6e";
			} else {
			attempts += 1;
			grade = (correctAnswers/attempts) * 100;
			findScore();
			switch (difficulty){
			case 1001:
			points -= 75;
			break;
			case 101:
			points -= 35;
			break;
			default:
			points -= 15;
			}
			rankingSystem();
			document.getElementById("Score").innerHTML = "Score: " + score;
			document.getElementById("Score2").innerHTML = "Correct: " + correctAnswers;
			document.getElementById("Score3").innerHTML = "Questions: " + attempts;
			document.getElementById("rank").innerHTML = "Rank: " + rank;
			document.getElementById("points").innerHTML = "Points: " + points;
			document.getElementById("yourAnswer").innerHTML = "Oh no! You got it wrong.";
			document.getElementById("yourAnswer").style.color = "red";
			document.getElementById("yourAnswer").style.borderColor = "red";
			document.getElementById("yourAnswer").style.fontFamily = "courier new";
			document.getElementById("yourAnswer").style.boxShadow = "0 0 10px 5px #ff4530";
			}
		}
	} else if (operation.split(' ').join('').toUpperCase() === "R") {
		if (secondNumber > firstNumber) {
			if (firstNumber === 0) {
				firstNumber += 1;
			}
			let answerR = prompt(`What's the remainder after ${secondNumber} is divided by ${firstNumber}?`);
			if(answerR === null) {
			document.getElementById("yourAnswer").innerHTML = 'You can change operations by pressing the "Play" button.';
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "Times New Roman";
			document.getElementById("yourAnswer").style.boxShadow = "none";
			} else if (answerR.split(' ').join('') === "") {
			document.getElementById("yourAnswer").innerHTML = 'Push the "Math" button again for a different question.';
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "georgia";
			document.getElementById("yourAnswer").style.boxShadow = "none";
			} else if (isNaN(parseFloat(answerR.split(' ').join(''))) === true) {
			document.getElementById("yourAnswer").innerHTML = "Only use numbers in your answer.";
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "Trebuchet MS";
			document.getElementById("yourAnswer").style.boxShadow = "none";
			} else if (parseFloat(answerR.split(' ').join('')) === (Math.floor((secondNumber) % (firstNumber)))) {
			attempts += 1;
			correctAnswers += 1;
			grade = (correctAnswers/attempts) * 100;
			findScore();
			switch (difficulty){
			case 1001:
			points += 400;
			break;
			case 101:
			points += 200;
			break;
			default:
			points += 40;
			}
			rankingSystem();
			if (rank === "Mathematician" && score === "A+") {
				alert("Congratulations! You're an A+ Mathematician. You've mastered the game but you can continue playing for as long as you want for practice.");
			}
			document.getElementById("Score").innerHTML = "Score: " + score;
			document.getElementById("Score2").innerHTML = "Correct: " + correctAnswers;
			document.getElementById("Score3").innerHTML = "Questions: " + attempts;
			document.getElementById("rank").innerHTML = "Rank: " + rank;
			document.getElementById("points").innerHTML = "Points: " + points;
			document.getElementById("yourAnswer").innerHTML = "You got it right!";
			document.getElementById("yourAnswer").style.color = "green";
			document.getElementById("yourAnswer").style.borderColor = "green";
			document.getElementById("yourAnswer").style.fontFamily = "garamond";
			document.getElementById("yourAnswer").style.boxShadow = "0 0 10px 5px #19ff6e";
			} else {
			attempts += 1;
			grade = (correctAnswers/attempts) * 100;
			findScore();
			switch (difficulty){
			case 1001:
			points -= 200;
			break;
			case 101:
			points -= 100;
			break;
			default:
			points -= 20;
			}
			rankingSystem();
			document.getElementById("Score").innerHTML = "Score: " + score;
			document.getElementById("Score2").innerHTML = "Correct: " + correctAnswers;
			document.getElementById("Score3").innerHTML = "Questions: " + attempts;
			document.getElementById("rank").innerHTML = "Rank: " + rank;
			document.getElementById("points").innerHTML = "Points: " + points;
			document.getElementById("yourAnswer").innerHTML = "Oh no! You got it wrong.";
			document.getElementById("yourAnswer").style.color = "red";
			document.getElementById("yourAnswer").style.borderColor = "red";
			document.getElementById("yourAnswer").style.fontFamily = "courier new";
			document.getElementById("yourAnswer").style.boxShadow = "0 0 10px 5px #ff4530";
			}
		} else {
			if (secondNumber === 0) {
				secondNumber += 1;
			}
			let answerR = prompt(`What's the remainder after ${firstNumber} is divided by ${secondNumber}?`);
			if(answerR === null) {
			document.getElementById("yourAnswer").innerHTML = 'You can change operations by pressing the "Play" button.';
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "Times New Roman";
			document.getElementById("yourAnswer").style.boxShadow = "none";
			} else if (answerR.split(' ').join('') === "") {
			document.getElementById("yourAnswer").innerHTML = 'Push the "Math" button again for a different question.';
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "georgia";
			document.getElementById("yourAnswer").style.boxShadow = "none";
			} else if (isNaN(parseFloat(answerR.split(' ').join(''))) === true) {
			document.getElementById("yourAnswer").innerHTML = "Only use numbers in your answer.";
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "Trebuchet MS";
			document.getElementById("yourAnswer").style.boxShadow = "none";
			} else if (parseFloat(answerR.split(' ').join('')) === (Math.floor((firstNumber) % (secondNumber)))) {
			attempts += 1;
			correctAnswers += 1;
			grade = (correctAnswers/attempts) * 100;
			findScore();
			switch (difficulty){
			case 1001:
			points += 400;
			break;
			case 101:
			points += 200;
			break;
			default:
			points += 40;
			}
			rankingSystem();
			if (rank === "Mathematician" && score === "A+") {
				alert("Congratulations! You're an A+ Mathematician. You've mastered the game but you can continue playing for as long as you want for practice.");
			}
			document.getElementById("Score").innerHTML = "Score: " + score;
			document.getElementById("Score2").innerHTML = "Correct: " + correctAnswers;
			document.getElementById("Score3").innerHTML = "Questions: " + attempts;
			document.getElementById("rank").innerHTML = "Rank: " + rank;
			document.getElementById("points").innerHTML = "Points: " + points;
			document.getElementById("yourAnswer").innerHTML = "You got it right!";
			document.getElementById("yourAnswer").style.color = "green";
			document.getElementById("yourAnswer").style.borderColor = "green";
			document.getElementById("yourAnswer").style.fontFamily = "garamond";
			document.getElementById("yourAnswer").style.boxShadow = "0 0 10px 5px #19ff6e";
			} else {
			attempts += 1;
			grade = (correctAnswers/attempts) * 100;
			findScore();
			switch (difficulty){
			case 1001:
			points -= 200;
			break;
			case 101:
			points -= 100;
			break;
			default:
			points -= 20;
			}
			rankingSystem();
			document.getElementById("Score").innerHTML = "Score: " + score;
			document.getElementById("Score2").innerHTML = "Correct: " + correctAnswers;
			document.getElementById("Score3").innerHTML = "Questions: " + attempts;
			document.getElementById("rank").innerHTML = "Rank: " + rank;
			document.getElementById("points").innerHTML = "Points: " + points;
			document.getElementById("yourAnswer").innerHTML = "Oh no! You got it wrong.";
			document.getElementById("yourAnswer").style.color = "red";
			document.getElementById("yourAnswer").style.borderColor = "red";
			document.getElementById("yourAnswer").style.fontFamily = "courier new";
			document.getElementById("yourAnswer").style.boxShadow = "0 0 10px 5px #ff4530";
			}
		}
	}
	if (attempts > 9) {
		document.getElementById("Score").style.visibility = "visible";
	}
}

const switchOperation = function () {
	operation = prompt('Pick the operation that you want questions for with this button, then hit "Math" to get questions for that operation. For Addition, type "A", for Subtraction, type "S", for Multiplication, type "M", for Division, type "D", or to find the Remainder, type "R".');

		if (operation === null) {	
			document.getElementById("yourAnswer").innerHTML = 'Refresh your browser or press "Play" to continue.';
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "Times New Roman";
			document.getElementById("yourAnswer").style.boxShadow = "none";
	} else if (operation.split(' ').join('') === "") {
			document.getElementById("yourAnswer").innerHTML = 'Refresh your browser or press the "Play" button.';
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "georgia";
			document.getElementById("yourAnswer").style.boxShadow = "none";
	} else if (operation.split(' ').join('').toUpperCase() === "A") {
			document.getElementById("Switch-Button").innerHTML = "Addition";
	} else if (operation.split(' ').join('').toUpperCase() === "S") {
			document.getElementById("Switch-Button").innerHTML = "Subtraction";
	} else if (operation.split(' ').join('').toUpperCase() === "M") {
			document.getElementById("Switch-Button").innerHTML = "Multiplication";
	} else if (operation.split(' ').join('').toUpperCase() === "D") {
			document.getElementById("Switch-Button").innerHTML = "Division";
	} else if (operation.split(' ').join('').toUpperCase() === "R") {
			document.getElementById("Switch-Button").innerHTML = "Remainder";
	} else if (operation.split(' ').join('').toUpperCase() !== "A" && operation.split(' ').join('').toUpperCase() !== "S" && 
	operation.split(' ').join('').toUpperCase() !== "M" && operation.split(' ').join('').toUpperCase() !== "D"
	&& operation.split(' ').join('').toUpperCase() !== "R"){
			document.getElementById("yourAnswer").innerHTML = "Make sure that you read the directions carefully.";
			document.getElementById("yourAnswer").style.color = "black";
			document.getElementById("yourAnswer").style.borderColor = "black";
			document.getElementById("yourAnswer").style.fontFamily = "Trebuchet MS";
			document.getElementById("yourAnswer").style.boxShadow = "none";
		}
}

const changeDifficulty = () => {
	let difficultyLevel = prompt('You can adjust the difficulty of your questions with the "Difficulty" button. The higher your difficulty, the more points you gain and lose for correct and incorrect answers. Type "1" for an easier difficulty, "2" for more of a challenge, or "3" for an extreme challenge.');
	
	if (difficultyLevel === "1") {
		difficulty = 13;
		document.getElementById("Difficulty-Button").innerHTML = "Go Easy";
		document.getElementById("Difficulty-Button").style.backgroundColor = "#33BBFF";
	} else if (difficultyLevel === "2") {
		difficulty = 101;
		document.getElementById("Difficulty-Button").innerHTML = "Challenge Me";
		document.getElementById("Difficulty-Button").style.backgroundColor = "#8080FF";
	} else if (difficultyLevel === "3") {
		difficulty = 1001;
		document.getElementById("Difficulty-Button").innerHTML = "Let's Overdo It!";
		document.getElementById("Difficulty-Button").style.backgroundColor = "#FF1966";
	}
}

