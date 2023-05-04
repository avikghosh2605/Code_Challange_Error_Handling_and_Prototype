// Sample list of book objects
const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
  ];
  
  // Callback function to log the titles in alphabetical order
  function logTitles(titles) {
    console.log(titles.sort());
  }
  
  // Extract the titles from the book objects using the map function
  const titles = books.map(book => book.title);
  
  // Pass the titles to the callback function for logging
  logTitles(titles);
  