// 1
function sumPositiveNumbers(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            total += numbers[i];
        }
    }
    return total;
}

// 2
const numbers = [2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8,];
const result = sumPositiveNumbers(numbers);
alert(result);

function sum2(numbers2) {
    let total = 0;
    for (let i = 0; i < numbers2.length; i++) {
            total += numbers2[i];
    }
    return total;
}
const numbers2 = [10, 50, 6, 7, 8, 11, 6, 3, 9]
const result2 = sum2(numbers2);
alert(result2)


// 3
function checkOddOrEven() {
    const number = parseInt(prompt("Please enter a number:"));
    if (!isNaN(number)) {
        if (number % 2 === 0) {
            return number + " <- This number is even.";
        } else {
            return number + " <- This number is odd.";
        }
    } else {
        return "Invalid input. Please enter a valid number.";
    }
}

const result3 = checkOddOrEven();
alert(result3);