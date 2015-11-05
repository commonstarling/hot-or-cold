/*Global variable list*/
var userGuessInt = '';
var secretNumberGenerator = '';

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
	var userGuessInt = parseInt(userGuess, 10);
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
			hotCold();
		}
}

/*function to weigh if guesses are hot or cold*/
function hotCold() {
	if (userGuessInt === secretNumber) {
		setFeedback("You win!");
	}
	else if	((userGuessInt - secretNumber) < 0) {
		negativeValue(userGuessInt);
	}
	else {
		positiveValue(userGuessInt);
	}
}


/*function to give user feedback*/
function setFeedback(feedback) {
    $("#feedback").text(feedback);
}

/*function to consider numbers higher than the secret number*/
function positiveValue() {
		if (userGuessInt == secretNumber) {
			setFeedback("You win!");
		}
		else if ((userGuessInt - secretNumber) <= 5) {
			setFeedback("You're burning up!");
		}
		else if ((userGuessInt - secretNumber) < 10) {
			setFeedback("Whew, it's so hot I'm breaking a sweat!");
		}
		else if ((userGuessInt - secretNumber) < 20) {
			setFeedback("Now we're getting toasty!");
		}
		else if ((userGuessInt - secretNumber) < 30) {
			setFeedback("The heat's starting to kick in!");
		}
		else if ((userGuessInt - secretNumber) < 40) {
			setFeedback("You're warmer, but still pretty cold!");
		}
		else if ((userGuessInt - secretNumber) > 50) {
			setFeedback("Brrr... You're freezing!");
		}
	}

/*function to consider numbers lower than the secret number*/
function negativeValue() {
	if (userGuessInt === secretNumber) {
			setFeedback("You win!");
		}
		else if ((secretNumber - userGuessInt) <= 5) {
			setFeedback("You're burning up!");
		}
		else if ((secretNumber - userGuessInt) < 10) {
			setFeedback("Whew, it's so hot I'm breaking a sweat!");
		}
		else if ((secretNumber - userGuessInt) < 20) {
			setFeedback("Now we're getting toasty!");
		}
		else if ((secretNumber - userGuessInt) < 30) {
			setFeedback("The heat's starting to kick in!");
		}
		else if ((secretNumber - userGuessInt) < 40) {
			setFeedback("You're warmer, but still pretty cold!");
		}
		else if ((secretNumber - userGuessInt) >= 50) {
			setFeedback("Brrr... You're freezing!");
		}
	}

});