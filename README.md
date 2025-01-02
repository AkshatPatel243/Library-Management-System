# Library-Management-System
This repository contains a basic Library Management System implemented in JavaScript. It demonstrates fundamental JavaScript concepts such as objects, arrays, loops, conditional statements, functions, and switch cases. Additionally, it includes functionality to check whether the library is open based on the current time.

Description: Library Management System
This repository contains a basic Library Management System implemented in JavaScript. It demonstrates fundamental JavaScript concepts such as objects, arrays, loops, conditional statements, functions, and switch cases. The system is designed to manage a collection of books and perform common operations like displaying available books, borrowing books, and returning books. Additionally, it includes functionality to check whether the library is open based on the current time.

Features
Library Object:

Stores the library's details (name, location) and an array of book objects.
Each book object contains:
Title
Author
Availability status (isAvailable).
Core Functions:

displayBooks:
Loops through the books array and displays all books with their availability status.
borrowBook:
Allows borrowing a book by title if it is available.
Updates the book's isAvailable status and provides user feedback.
returnBook:
Marks a borrowed book as returned by updating its isAvailable status.
isLibraryOpen:
Checks if the library is open based on the current hour (open from 9 AM to 8 PM).
Action Manager:

manageLibrary:
A central function that handles different actions (display, borrow, return, checkStatus) using a switch statement.
Use Case Scenarios
Display All Books:
View the list of all books and their availability.
Borrow a Book:
Borrow a book if it is available; otherwise, receive an error message.
Return a Book:
Return a borrowed book and update its status to available.
Check Library Status:
Determine whether the library is currently open or closed based on the time.
Techniques Demonstrated
Objects and Arrays:
Organizing and storing data using objects and arrays.
Loops:
Using for loops to iterate through the books array.
Conditional Logic:
Implementing conditional checks to handle operations like borrowing and returning books.
Switch Statement:
Managing multiple user actions in a clean and organized manner.
Functions:
Encapsulation of reusable logic for better code structure.
How to Use
Clone the repository to your local machine:
bash
Copy code
git clone https://github.com/your-username/library-management-system.git
Open the project in your favorite code editor (e.g., VS Code).
Run the script in a browser console or Node.js environment.
Modify the library object to add or remove books as needed.
Example
Here’s an example of how the system works:

javascript
Copy code
manageLibrary("display"); // Display all books
manageLibrary("borrow", "Book Title 1"); // Borrow a book
manageLibrary("return", "Book Title 1"); // Return the borrowed book
manageLibrary("checkStatus", "", 10); // Check if the library is open at 10 AM
This project is a great starting point for learning JavaScript basics and can be extended with additional features like user accounts, late fees, or book genres. Contributions and suggestions are always welcome! 🚀
