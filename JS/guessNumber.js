let start = +prompt ("Which number 1 - 100 do you choose?")
    if (start >= 1 && start <= 100) {
        let guess = prompt("Let's guess a number")
        if (start == guess) {
            alert ("Correct")
        }
        while (!(start == guess)) {
            while (guess > start) {
                guess = prompt ("Your number is too high, guess again")
            }
            while (guess < start && guess != "") {
                guess = prompt ("Your number is too low, guess again")
            }
            while (!(guess >= 1 && guess <= 100)) {
                guess = prompt ("Input is invalid, insert again")
            } 
            if (start == guess) {
                alert ("Correct")
            }
        }
    }

