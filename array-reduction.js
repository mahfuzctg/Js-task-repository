const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to calculate the sum of all even numbers using reduce
const sumOfEvenNumbers = (arr) => {
  return arr.reduce((sum, num) => {
    if (num % 2 === 0) {
      // Check if the number is even
      return sum + num; // Add it to the sum
    }
    return sum; // Return the current sum if the number is odd
  }, 0); // Initial sum is 0
};

// Call the function and print the result
const result = sumOfEvenNumbers(numbers);
console.log(result); // Output: 30 (2 + 4 + 6 + 8 + 10)
