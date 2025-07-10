/*
# Finding the Largest Prime Factor in JavaScript

To find the largest prime factor of a number, we need to:
    1. Divide the number by the smallest possible prime (2) repeatedly until it's no longer divisible
2. Then move to the next possible factor and repeat
3. The last remaining factor will be the largest prime factor

Here's a JavaScript implementation for finding the largest prime factor of 600851475143:

    ```javascript
function largestPrimeFactor(number) {
    let largestFactor = 1;
    let currentFactor = 2;
    let n = number;

    // Handle divisibility by 2 separately
    while (currentFactor * currentFactor <= n) {
        if (n % currentFactor === 0) {
            largestFactor = currentFactor;
            while (n % currentFactor === 0) {
                n = n / currentFactor;
            }
        }
        currentFactor = (currentFactor === 2) ? 3 : currentFactor + 2;
    }

    // If what's left is greater than 1, it's a prime factor
    if (n > 1) {
        largestFactor = n;
    }

    return largestFactor;
}

const number = 600851475143;
console.log(`The largest prime factor of ${number} is:`, largestPrimeFactor(number));
```

## How This Works:

    1. We start with the smallest prime factor (2) and divide the number by it as many times as possible.
2. After handling 2, we only check odd numbers (3, 5, 7, etc.) as potential factors.
3. For each factor found, we divide the number by that factor until it's no longer divisible.
4. We continue this process up to the square root of the remaining number.
5. If after all divisions the remaining number is greater than 1, it's itself a prime number and the largest prime factor.

For the number 600851475143, this program will efficiently find the largest prime factor. The algorithm is optimized by:
    - Skipping even numbers after checking 2
- Stopping at the square root of the remaining number
- Dividing out each factor completely before moving to the next potential factor
*/

// My Solution

function largestPrimeFactor(number) {
    let res = [], value;
// get all primes
    for(let i = 2; i <= number; i++) {
        let flag = true;
        for(let j = 2; j < i; j++) {
            if(i % j === 0){
                flag = false;
            }
        }
        if(flag) res.push(i);
    }
// console logging
    console.log(res)
// finding largest prime using loop
    res.forEach(element => {if(number % element === 0){value = element;}});

    return value;
}

// VAlid Optimal Solution

function largestPrimeFactor(number) {

    let largestFactor = 1;
    let currentFactor = 2;
    let n = number;

// Handle divisibility by 2 separately
    while (currentFactor * currentFactor <= n) {
        if (n % currentFactor === 0) {
            largestFactor = currentFactor;
            while (n % currentFactor === 0) {
                n = n / currentFactor;
            }
        }
        currentFactor = (currentFactor === 2) ? 3 : currentFactor + 2;
    }

// If what's left is greater than 1, it's a prime factor
    if (n > 1) {
        largestFactor = n;
    }

    return largestFactor;

}

console.log(largestPrimeFactor(600851475143));