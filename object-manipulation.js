// Array of book objects
const books = [
  { title: "The Quran", author: "Various", year: 610 },
  { title: "The Book of Knowledge", author: "Imam al-Ghazali", year: 1100 },
  { title: "The Prophet", author: "Khalil Gibran", year: 1923 },
  { title: "In Search of Lost Time", author: "Marcel Proust", year: 1913 },
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
];

// Function to extract book titles
const getBookTitles = (arr) => {
  return arr.map((book) => book.title); // Map the array to extract only the titles
};

// Call the function and print the result
const bookTitles = getBookTitles(books);
console.log(bookTitles);
