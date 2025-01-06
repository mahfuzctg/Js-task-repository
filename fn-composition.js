// Function to square a number
const square = (num) => {
  return num * num; // Return the square of the number
};

// Function to double a number
const double = (num) => {
  return num * 2; // Return the double of the number
};

// Function to add 5 to a number
const addFive = (num) => {
  return num + 5; // Return the number with 5 added
};

// Function composition: square -> double -> addFive
const composedFunction = (num) => {
  return addFive(double(square(num))); // Square, double, and then add 5
};

// Test the composed function
const result = composedFunction(3); // First square (3), then double it, then add 5
console.log(result); // Output: 23
