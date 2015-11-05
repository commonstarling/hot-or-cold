/*Global variable list*/
var userGuessInt = '';
var secretNumber = '';

$(document).ready(function(){
	
/*--- Display information modal box ---*/
$(".what").click(function(){
	$(".overlay").fadeIn(1000);
});

/*--- Hide information modal box ---*/
$("a.close").click(function(){
	$(".overlay").fadeOut(1000);
});

/*function to generate random number*/
function secretNumberGenerator() {
    secretNumber = (Math.floor(Math.random()*100));
        console.log("Secret Number = " + secretNumber);
}
secretNumberGenerator();

/*function to submit form*/
function submitForm() {
	$('form').on('submit', function(e) {
		  e.preventDefault();
		  var userGuess = $('#userGuess').val();
		  console.log("User guess = " + userGuess);
		  validateNumber(userGuess);
		  resetForm();
	})
}
submitForm();

/*function to clear input after typing number*/
function resetForm() {
	$('#userGuess').val('');
}

/*function to check if number is valid */
function validateNumber() {
	var userGuess = $('#userGuess').val();
	var userGuessInt = parseInt(userGuess);
		if (isNaN(userGuessInt) === true) {
			alert("Please submit an integer from 1 to 100");
		}
		else if (userGuessInt > 100) {
			alert("Please submit a valid integer from 1 to 100");
		}
		else if (userGuessInt < 0) {
			alert("Please submit a valid integer from 1 to 100");
		}
		else {
			hotCold(userGuessInt);
		}
}

/*function to weigh if guesses are hot or cold*/
function hotCold(userGuessInt) {
	var userGuess = $('#userGuess').val();
	var userGuessInt = parseInt(userGuess);
	var difference = (userGuessInt - secretNumber);
	if (difference === 0) {
		setFeedback("You win!");
	}
	else if	(difference > 0) {
		positiveValue(userGuessInt);
	}
	else {
		negativeValue(userGuessInt);
	}
}


/*function to give user feedback*/
function setFeedback(feedback) {
    $("#feedback").text(feedback);
}

/*function to consider numbers higher than the secret number*/
function positiveValue() {
	var userGuess = $('#userGuess').val();
	var userGuessInt = parseInt(userGuess);
	var posDifference = (userGuessInt - secretNumber);
	if (posDifference <= 5) {
		setFeedback("You're burning up!");
	}
	else if (posDifference <= 10) {
		setFeedback("Whew, it's so hot I'm breaking a sweat!");
	}
	else if (posDifference <= 20) {
		setFeedback("Now we're getting toasty!");
	}
	else if (posDifference <= 30) {
		setFeedback("The heat's starting to kick in!");
	}
	else if (posDifference <= 40) {
		setFeedback("You're warmer, but still pretty cold!");
	}
	else if (posDifference <= 50) {
		setFeedback("Brrr... You're freezing!");
	}
	else if (posDifference > 50) {
		setFeedback("You're in the North Pole!");
	}
}


/*function to consider numbers lower than the secret number*/
function negativeValue() {
	var userGuess = $('#userGuess').val();
	var userGuessInt = parseInt(userGuess);
	var negDifference = (secretNumber - userGuessInt);
	if (negDifference <= 5) {
		setFeedback("You're burning up!");
	}
	else if (negDifference <= 10) {
		setFeedback("Whew, it's so hot I'm breaking a sweat!");
	}
	else if (negDifference <= 20) {
		setFeedback("Now we're getting toasty!");
	}
	else if (negDifference <= 30) {
		setFeedback("The heat's starting to kick in!");
	}
	else if (negDifference <= 40) {
		setFeedback("You're warmer, but still pretty cold!");
	}
	else if (negDifference <= 50) {
		setFeedback("Brrr... You're freezing!");
	}
	else if (negDifference > 50) {
		setFeedback("You're in the North Pole!");
	}
}

});