// Array of objects representing cars, each with make, model, and year properties
const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Mustang", year: 2012 },
  { make: "Chevrolet", model: "Malibu", year: 2020 },
];

// Function to sort the array of cars by the year of manufacture in ascending order
const sortCarsByYear = (arr) => {
  // The sort method compares the 'year' property of two car objects (a and b)
  return arr.sort((a, b) => a.year - b.year); // If a.year < b.year, a comes first
};

// Call the function to sort the cars array and store the sorted result
const sortedCars = sortCarsByYear(cars);

// Output the sorted array of cars to the console
console.log(sortedCars); // Prints the array sorted by year in ascending order
