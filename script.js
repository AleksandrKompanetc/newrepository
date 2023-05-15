//Циклы

//task1
function myFunction(a,b){
    let summ = 0;
    let count = 0;
    for(let i = a; i <= b; i++) {
        if(i % 2 === 0) {
            summ += i;
            count++;
        }
    }
    console.log('Сумма четных чисел в диапазоне равна:', summ);
    console.log('Количество четных чисел в диапазоне равно:', count);
}

myFunction(3,5);

//task2
function isPrime(num) {
    let res;
    if(num > 1) {
        for(let i = 2; i < num; i++) {
            if(num % i == 0) {
                return console.log(false);
            }
        }
        return console.log(true);
    } else {
        return console.log("Число должно быть больше 1");
    }
}

isPrime(7);
isPrime(9);

//task3
function getSqrtBySequentialSelection(number) {
    for(let i = 0; i <= number; i++) {
        if(i * i === number) {
            return console.log(i);
        }
    }
    return "This number has no integer root";
}

getSqrtBySequentialSelection(4);


function getSqrtByBinarySearch(number) {
    let ans = 0;
    let sqrt = 0;
    let e = number;
    while(sqrt <= e) {
        const middle = Math.trunc((sqrt + e) /2);
        if(middle * middle === number) {
            return middle;
        } else if (middle * middle < number) {
            sqrt = middle + 1;
            ans = middle;
        } else {
            e = middle - 1;
        }
    }
    return ans;
}

console.log(getSqrtByBinarySearch(9));

//task4
function getFactorial(n) {
    return (n != 1) ? n * getFactorial(n - 1) : 1;
}

console.log(getFactorial(4));
console.log(getFactorial(5));

//task5
function digitSum(n) {
    let sum = 0;
    for(let digit of `${n}`) {
        sum += +digit;
    }

    return console.log(sum);
}

digitSum(128);
digitSum(1);
 