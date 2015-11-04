
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
  console.log("User guess is " + userGuess);
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
		if (typeof userGuessInt !== 'number') {
			alert("Please submit an integer from 1 to 100");
		}
		else if (userGuessInt === NaN) {
			alert("Please submit an integer from 1 to 100");
		}
		else if (userGuessInt > 100) {
			alert("Please submit a valid integer from 1 to 100");
		}
		else if (userGuessInt < 0) {
			alert("Please submit a valid integer from 1 to 100");
		}
		/*else {
			hotCold(userGuessInt);
		}*/
}


});