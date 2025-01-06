const people = [
  { name: "Ahmed", age: 25, gender: "male" },
  { name: "Fatima", age: 22, gender: "female" },
  { name: "Ali", age: 30, gender: "male" },
  { name: "Aisha", age: 28, gender: "female" },
  { name: "Hassan", age: 35, gender: "male" },
  { name: "Zainab", age: 27, gender: "female" },
  { name: "Omar", age: 29, gender: "male" },
  { name: "Layla", age: 24, gender: "female" },
];

// Function to filter out females and map to names
const filterAndMapNames = (arr) => {
  return arr
    .filter((person) => person.gender !== "female") // Filter out females
    .map((person) => person.name); // Map the remaining to names
};

// Call the function and print the result
const result = filterAndMapNames(people);
console.log(result);
