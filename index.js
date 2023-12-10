// Challenge 1.1:
// Step 1: Create an object for storing your profile information.
let studentProfile = {
    studentName: "Somuya Khandelwal",
    studentAge: 19,
    cohortName: "Web Development",
    location: "Jaipur",
    hobbies: ["Gaming", "Coding"]
  };
  
  // Step 2: Add more than one hobby in the student object.
  studentProfile.hobbies.push("Skating", "adventure");
  
  // Challenge 1.2:
  // Access the studentName value of the object "studentProfile" using dot "." notation.
  console.log(studentProfile.studentName);
  
  // Challenge 1.3:
  // Access the cohortName property of the object using Bracket notation ([]).
  console.log(studentProfile["cohortName"]);
  
  // Challenge 2.1:
  // Create an object using the constructor function for storing the book information.
  function Book(title, author) {
    this.title = title;
    this.author = author;
  }
  
  // Challenge 2.2:
  // Access the title property of the object "Book" and print the same in console.
  const myBook = new Book("feel Good productivity", "Ali abdal");
  console.log(myBook.title);
  