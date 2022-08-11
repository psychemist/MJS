let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

styles[Math.floor((styles.length) / 2)] = "Classics";

let str = styles.shift();
return str

styles.unshift("Rap", "Reggae");


function sumInput() {
    let numbers = [];

    while (true) {
        let value = prompt("Enter a value, please", 0);

        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }

    let sum = 0;
    for (let num of numbers) {
        sum += num;
    } return sum
}

sumInput();


//0(n^2)
function getMaxSubSum(arr) {
    let maxSum = 0

    for (let i = 0; i < arr.length; i++) {
        let subSum = 0;

        for (let j = i; j < arr.length; j++) {
            subSum += arr[j];
            maxSum = Math.max(maxSum, subSum)
        }
    }
    return maxSum;
}

//0(n)
function getMaxSubSum(arr) {
    let subSum = 0;
    let maxSum = 0;

    for (let item of arr) {
        subSum += item;
        maxSum = Math.max(maxSum, subSum);
        if (subSum < 0) subSum = 0;
    }

    return maxSum
}

