// Day 7: Objects

// Tasks/Activities:

// Activity 1: Object Creation and Access

// « Task 1: Create an object representing a book with properties Uke ttle, author, and year, and log the object to the console.

const book= {
    title: "H is for Hawk",
    author: "Helen Macdonald",
    year: 2014,

    details() {
        return this.title + this.author+ this.year;
    },
    changeYear(yr) {
        this.year= yr;
    }
};

console.log(book);

// Output:
// {
//     title: 'H is for Hawk',
//     author: 'Helen Macdonald',        
//     year: 2014,
//     details: [Function: details],     
//     changeYear: [Function: changeYear]
//   }

// + Task 2: Access and log the title and author properties of the book object.

console.log("title:", book.title);
console.log("author:", book.author);

// Output:
// title: H is for Hawk
// author: Helen Macdonald

// Activity 2: Object Methods

// + Task 3: Add a method to the book object that returns a string with the book's ite and author, and log the result of calling this method.

console.log(book.details());                            // Output: H is for Hawk Helen Macdonald 2014

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book.changeYear(2015);
console.log(book.year);                                 // Output: 2015

// Activity 3: Nested Objects

// + Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const lib= {
    name: "library",
    books: [
        {
            name: "The Kite Runner",
            author: "Khaled Hosseini",
            year: 2003,
            details() {
                return `${this.name} ${this.year}`;
            }
        },
        {
            name: "The Book Thief",
            author: "Markus Zusak",
            year: 2005,
            details() {
                return `${this.name} ${this.year}`;
            }
        },
    ]
};

console.log(lib);

// Output: {
//   name: 'library',
//   books: [
//     {
//       name: 'The Kite Runner',
//       author: 'Khaled Hosseini',
//       year: 2003,
//       details: [Function: details]
//     },
//     {
//       name: 'The Book Thief',
//       author: 'Markus Zusak',
//       year: 2005,
//       details: [Function: details]
//     }
//   ]
// }

// + Task 6: Access and log the name of the library and the titles of all the books In the library.

console.log(lib.name);                              // Output: library

lib.books.forEach(book => console.log(book.name));

// Output:
// The Kite Runner
// The Book Thief

// Activity 4: The this Keyword

// * Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

lib.books.forEach(book => console.log(book.details()));

// Output:
// The Kite Runner 2003
// The Book Thief 2005

// Activity 5: Object Iteration

// + Task 8: Use a for. Loop to Iterate over the properties of the book object and log each property and its value.

for( let i in book) {
    console.log(i);
    console.log(book[i]);
}

// Output:
// title
// H is for Hawk
// author
// Helen Macdonald
// year
// 2015
// details
// [Function: details]
// changeYear
// [Function: changeYear]

// « Task 9: Use Object. keys and Object. values methods to log all the keys and values of the book object.

console.log(Object.keys(book));
console.log(Object.values(book));

// Output:
// [ 'title', 'author', 'year', 'details', 'changeYear' ]
// [
//   'H is for Hawk',
//   'Helen Macdonald',
//   2015,
//   [Function: details],
//   [Function: changeYear]
// ]