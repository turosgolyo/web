function fizzbuzz(number){
    let arr = [];
    for (let i = 0; i <= number; i++){
        if (i % 3 === 0 & i % 5 === 0){
            arr.push("FizzBuzz");
        }
        else if (i % 5 === 0){
            arr.push("Buzz");
        }
        else if (i % 3 === 0){
            arr.push("Fizz");
        }
        else{
            arr.push(i);
        }
    }
    return arr;
}

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

const rps = (p1, p2) => {
    if (p1 == 'scissors' && p2 == 'paper'){
      return 'Player 2 won!';
    } else if (p1 === "paper" && p2 === "scissors"){
      return 'Player 1 won!';
    } else if (p1 === 'rock' && p2 === 'scissors') {
      return 'Player 1 won!';
    } else if (p1 === 'scissors' && p2 === 'rock') {
      return 'Player 2 won!';
    } else if (p1 === 'rock' && p2 === 'paper') {
      return 'Player 1 won!';
    } else if (p1 === 'paper' && p2 === 'rock') {
      return 'Player 2 won!';
    } else {
      return 'Draw!';
    }
}

function myParseInt(str){
    for(let i = 0; i <= str.lenght; i++){
        var a = str.split("");
        if(isNaN(a[i])){
            return str = NaN;
        }
    }
}