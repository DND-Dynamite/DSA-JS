/*
*
* What you're solving for
Find the largest palindrome that is the product of two $n$-digit numbers. [1]
What's given in the problem

• A palindromic number reads the same forwards and backward. [2]
• The largest palindrome from the product of two 2-digit numbers is $9009 = 91 \times 99$. [3, 3, 4, 4]

How to solve
Iterate through all possible products of $n$-digit numbers and check for the largest palindrome. [2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

1. Step 1 Define the range of $n$-digit numbers.
	• The largest $n$-digit number is $10^n - 1$.
	• The smallest $n$-digit number is $10^{n-1}$.

2. Step 2 Iterate through the product of $n$-digit numbers.
	• Start with the largest possible product.
	• Iterate downwards to find the largest palindrome.

3. Step 3 Check if a number is a palindrome.
	• Convert the number to a string.
	• Compare the string with its reverse.

4. Step 4 Store the largest palindrome found so far.
	• Update the largest palindrome if a larger one is found.

5. Step 5 Return the largest palindrome.

Code
def is_palindrome(n):
    return str(n) == str(n)[::-1]

def largest_palindrome_product(n):
    max_val = 10**n - 1
    min_val = 10**(n-1)
    largest_palindrome = 0

    for i in range(max_val, min_val - 1, -1):
        for j in range(i, min_val - 1, -1):
            product = i * j
            if product <= largest_palindrome:
                break
            if is_palindrome(product):
                largest_palindrome = product

    return largest_palindrome

Solution
The largest palindrome made from the product of two $n$-digit numbers can be found by iterating through all possible products of $n$-digit numbers and checking for palindromes. The largest palindrome for $n=2$ is $9009$, for $n=3$ is $906609$, and for $n=4$ is $99000099$. [1, 3, 17]

AI responses may include mistakes.

* [1]https://www.geeksforgeeks.org/dsa/largest-palindrome-product-two-n-digit-numbers/
* [2]https://en.wikipedia.org/wiki/Palindrome
* [3]https://www.geeksforgeeks.org/largest-palindrome-which-is-product-of-two-n-digit-numbers-set-2/
* [4]https://www.doubtnut.com/pcmb-questions/721
* [5]https://www.linkedin.com/pulse/largest-palindrome-product-ebubechukwu-oguaju-dike-
* [6]https://en.wikipedia.org/wiki/Palindromic_number
* [7]https://www.geeksforgeeks.org/dsa/smallest-and-largest-palindrome-with-n-digits/
* [8]https://algo.monster/liteproblems/479
* [9]https://algo.monster/liteproblems/1913
* [10]https://afteracademy.com/blog/find-the-closest-palindrome/
* [11]https://www.sololearn.com/en/Discuss/1448114/i-don-t-understand-this-question
* [12]https://www.naukri.com/code360/library/palindrome-number-in-python
* [13]https://www.geeksforgeeks.org/finding-largest-palindromic-number-divisible-by-smallest-prime
* /[14]https://www.geeksforgeeks.org/dsa/longest-palindrome-formed-by-concatenating-and-reordering-strings-of-equal-length/
* [15]https://www.geeksforgeeks.org/dsa/longest-palindromic-substring-using-dynamic-programming-2/
* [16]https://www.linkedin.com/pulse/largest-palindrome-product-ebubechukwu-oguaju-dike-
* [17]https://www.linkedin.com/pulse/largest-palindrome-product-ebubechukwu-oguaju-dike-
*
* */

function largestPalindromeProduct(n) {

        let upper_limit = Math.pow(10, n) - 1;
        let lower_limit = 1 + parseInt(upper_limit / 10, 10);

        // Initialize result
        let max_product = 0;

        for (let i = upper_limit; i >= lower_limit; i--) {
            for (let j = i; j >= lower_limit; j--) {

                let product = i * j;
                if (product < max_product) break;
                let number = product;
                let reverse = 0;

                while (number !== 0) {
                    reverse = reverse * 10 + number % 10;
                    number = parseInt(number / 10, 10);
                }

                if (product === reverse && product > max_product)
                    max_product = product;
            }
        }

        return max_product;
}

console.log(largestPalindromeProduct(5));