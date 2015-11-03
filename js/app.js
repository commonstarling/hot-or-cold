$(document).ready(function(){
     
    /*--- Display information modal box ---*/
	$(".what").click(function(){
		$(".overlay").fadeIn(1000);  
	});
 
    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
        $(".overlay").fadeOut(1000);
	});
});
/*function to generate random number*/
function secretNumberGenerator(){
             secretNumber = (Math.floor(Math.random()*100));
                 console.log("Secret Number = " + secretNumber);
}
secretNumberGenerator();

/*function to capture input number*/
$('#guessButton').click(function() {
        	var guessedNumber = $('#userGuess').val();
        	var guessedNumberInt = parseInt(guessedNumber, 10);
        	alert(guessedNumberInt);
        	hotCold(guessedNumberInt);
            resetForm();
});

/*function to reset input box*/
function resetForm() {
	$('#userGuess').val('');
}

/*function to tell user if they're hot or cold*/
function setFeedback(feedback) {
             $("#feedback").text(feedback);
             }

/*function to compare user guess with secret number*/
function hotCold() {
	function positiveValue() {
		if (guessedNumberInt === secretNumber) {
			setFeedback("Congrats, you got it!");
		}
		else if ((guessedNumberInt - secretNumber) >= 50) {
			setFeedback("Brrrr... you're freezing!");
		}
		else if ((guessedNumberInt - secretNumber) > 40) {
			setFeedback("You're warmer, but still pretty cold!");
		}
		else if ((guessedNumberInt - secretNumber) > 30) {
			setFeedback("The heat's starting to kick in!");
		}
		else if ((guessedNumberInt - secretNumber) > 20) {
			setFeedback("Now we're getting toasty!");
		}
		else if ((guessedNumberInt - secretNumber) > 10) {
			setFeedback("Whew, it's so hot I'm breaking a sweat!");
		}
		else if ((guessedNumberInt - secretNumber) > 5) {
			setFeedback("You're burning up!");
		}
	}

	function negativeValue() {
		if (guessedNumberInt === secretNumber) {
			setFeedback("Congrats, you got it!");
		}
		else if ((guessedNumberInt - secretNumber) <= -50) {
			setFeedback("Brrrr... you're freezing!");
		}
		else if ((guessedNumberInt - secretNumber) < -40) {
			setFeedback("You're warmer, but still pretty cold!");
		}
		else if ((guessedNumberInt - secretNumber) < -30) {
			setFeedback("The heat's starting to kick in!");
		}
		else if ((guessedNumberInt - secretNumber) < -20) {
			setFeedback("Now we're getting toasty!");
		}
		else if ((guessedNumberInt - secretNumber) < -10) {
			setFeedback("It's so hot, I'm breaking a sweat!");
		}
		else if ((guessedNumberInt - secretNumber) < -5) {
			setFeedback("You're burning up!");
		}
	}
}

/*function to track previous guesses*/

/*function to track number of guesses*/

/*function to reset game*/
