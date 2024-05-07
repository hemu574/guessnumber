var msg1 = document.getElementById("msg1");
var msg2 = document.getElementById("msg2");
var msg3 = document.getElementById("msg3");
var playAgainBtn = document.getElementById("playAgainBtn");

        var lowerLimit = 1; // Define your lower limit
        var upperLimit = 100; // Define your upper limit

        var answer = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
        var no_of_guesses = 0;
        var maxAttempts = 7; // Limit the number of attempts to 5
        var guessed_nums = [];

        function play() {
            if (no_of_guesses >= maxAttempts) {
                alert("You have run out of attempts. Please click 'Play Again' to start a new game.");
                return;
            }

            var user_guess = parseInt(document.getElementById("guess").value);
            if (user_guess < lowerLimit || user_guess > upperLimit) {
                alert("Please enter a number within the specified limits.");
            } else {
                guessed_nums.push(user_guess);
                no_of_guesses += 1;

                if (user_guess < answer) {
                    msg1.textContent = "Your guess is too low.";
                } else if (user_guess > answer) {
                    msg1.textContent = "Your guess is too high.";
                } else if (user_guess === answer) {
                    msg1.textContent = "Congratulations! You Win!!";
                    msg1.classList.add("win-message");
                    msg2.textContent = "The number was: " + answer;
                    msg3.textContent = "You guessed it in " + no_of_guesses + " guesses";
                    playAgainBtn.disabled = false;
                }
                msg2.textContent = "No. of guesses: " + no_of_guesses;
                msg3.textContent = "Guessed numbers are: " + guessed_nums;
                document.getElementById("guess").value = ""; // Clear the input field after each guess
            }

            if (no_of_guesses >= maxAttempts) {
                alert("You have run out of attempts. Please click 'Play Again' to start a new game.");
                playAgainBtn.disabled = false;
            }
        }

        function resetGame() {
            answer = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
            no_of_guesses = 0;
            guessed_nums = [];
            msg1.textContent = "";
            msg1.classList.remove("win-message");
            msg2.textContent = "";
            msg3.textContent = "";
            playAgainBtn.disabled = true;
        }
