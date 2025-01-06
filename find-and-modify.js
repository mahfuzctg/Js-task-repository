// Array of objects representing people
const people = [
  { name: "Ahmed", age: 25 },
  { name: "Fatima", age: 22 },
  { name: "Omar", age: 35 },
  { name: "Aisha", age: 28 },
];

// Function to find a person by name and modify their age
const findAndModifyAge = (arr, name, newAge) => {
  const person = arr.find((p) => p.name === name); // Find the person by name
  if (person) {
    person.age = newAge; // Modify the age property if the person is found
  }
  return arr;
};

// Call the function to modify Mike's age to 35 and print the updated array
const updatedPeople = findAndModifyAge(people, "Mike", 35);
console.log(updatedPeople);
