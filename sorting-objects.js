// Array of objects representing cars
const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Mustang", year: 2012 },
  { make: "Chevrolet", model: "Malibu", year: 2020 },
];

// Function to sort the cars by year of manufacture in ascending order
const sortCarsByYear = (arr) => {
  return arr.sort((a, b) => a.year - b.year); // Sort based on the year property
};

// Call the function and print the sorted array
const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);
