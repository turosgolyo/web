// 1. feladat
function digitsAverage(number) {
     const digits = String(number).split('').map(Number);
     const total = digits.reduce((sum, digit) => sum + digit, 0);
     const average = total / digits.length;
     return average;
}

// 2. feladat
function fizzbuzz(number) {
    if (number % 3 === 0) {
        return 'fizz';
    } else if (number % 5 === 0) {
        return 'buzz';
    } else {
        return number;
    }
}

// 3. feladat
function seconds(time) {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    const totalSecondsInDay = 24 * 60 * 60; 
    const currentSeconds = (hours * 3600) + (minutes * 60) + seconds;
    return totalSecondsInDay - currentSeconds;
}

// 4. feladat
function divisors(number) {
    const divisors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}