//TODO - Create a library object and add properties and methods to it:

// ### Library Object
const library = {
  name: "Local Library",
  location: "Jabalpur",
  books: [
    {
      title: "The Game of Thrones",
      author: "George R.R. Martin",
      isAvailable: true,
    },
    {
      title: "Discpline is the Destiny",
      author: "Ryan Holiday",
      isAvailable: true,
    },
    {
      title: "48 Laws of Power",
      author: "Robert Greene",
      isAvailable: true,
    },
    {
      title: "Courage to be Disliked",
      author: "Ichiro Kishimi",
      isAvailable: false,
    },
  ],
};

// ### Display Books Function
function displayBooks() {
  console.log("Books in the library:");
  for (let i = 0; i < library.books.length; i++) {
    console.log(
      `${library.books[i].title} - ${
        library.books[i].isAvailable ? "Available" : "Not Available"
      }`
    );
  }
}

// ### Borrow Book Function
function borrowBook(title) {
  for (let i = 0; i < library.books.length; i++) {
    if (library.books[i].title === title) {
      if (library.books[i].isAvailable) {
        library.books[i].isAvailable = false;
        console.log(`You have borrowed ${title}`);
      } else {
        console.log(`Sorry, ${title} is not available`);
      }
      return;
    }
  }
  console.log(`Book titled "${title}" not found in the library.`);
}

// ### Return Book Function
function returnBook(title) {
  for (let i = 0; i < library.books.length; i++) {
    if (library.books[i].title === title) {
      library.books[i].isAvailable = true;
      console.log(`You have returned ${title}`);
      return;
    }
  }
  console.log(`Book titled "${title}" not found in the library.`);
}

// ### Check Library Open Status Function
function isLibraryOpen(time) {
  if (time >= 9 && time <= 20) {
    console.log("Library is open");
  } else {
    console.log("Library is closed");
  }
}

// ### Check Book Availability Function
function checkAvailability(title) {
  for (let i = 0; i < library.books.length; i++) {
    if (library.books[i].title === title) {
      if (library.books[i].isAvailable) {
        console.log(`${title} is available`);
      } else {
        console.log(`${title} is not available`);
      }
      return;
    }
  }
  console.log(`Book titled "${title}" not found in the library.`);
}

// ### Manage Library Function
function manageLibrary(action) {
  switch (action) {
    case "display":
      displayBooks();
      break;
    case "borrow":
      let title = prompt("Enter the title of the book you want to borrow:");
      borrowBook(title);
      break;
    case "return":
      let title1 = prompt("Enter the title of the book you want to return:");
      returnBook(title1);
      break;
    case "checkStatus":
      let time = prompt("Enter the current time (in 24-hour format):");
      isLibraryOpen(time);
      break;
    case "checkAvailability":
      let title2 = prompt("Enter the title of the book you want to check:");
      checkAvailability(title2);
      break;
    default:
      console.log(
        `Invalid action. Use display, borrow, return, checkStatus, checkAvailability commands only.`
      );
  }
}

// ### Initial Display of Books
displayBooks();
