// 1-topshiriq. Destructuring

// 1-misol
// const prices=[10.99, 5.45, 23.00, 7.86];
// let [a, b, c, d]=prices;
// console.log(a);
// console.log(d);

// 2-misol
// const prices=[10.99, 5.45, 23.00, 7.86];
// let [a, b, c, d]=prices;
// [a, b]=[b, a]
// console.log(a);

// 3-misol
// const prices = [10.99, 5.45, 23.00, 7.86];
// const separate = prices.slice(1, 3);
// const multiplied = separate.map(price => price * 2);
// console.log(multiplied); 

// 1-misol
// const movie1={
//     title: "The Matrix",
//     director: "The Wachowskis",
//     year: 1999,
// };

// const movie2={
//     genre: "Science fiction",
//     cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
// };

// const movie = Object.assign({}, movie1, movie2);
// console.log(movie);


// 2-misol
// const movie1 = {
//     title: "The Matrix",
//     director: "The Wachowskis",
//     year: 1999,
// };

// const movie2 = {
//     genre: "Science fiction",
//     cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
// };

// const movie = Object.assign({}, movie1, movie2);
// const title = movie.title;
// const director = movie.director;
// const genre = movie.genre;
// console.log("Sarlavha: " + title);
// console.log("Rejissyor: " + director);
// console.log("Janr: " + genre);


// 3-misol
// const movie1 = {
//     title: "The Matrix",
//     director: "The Wachowskis",
//     year: 1999,
// };

// const movie2 = {
//     genre: "Science fiction",
//     cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
// };
// function merge(a, b) {
//     const { title: title1, director: director1, year: year1 } = a;
//     const { genre: genre2, cast: cast2 } = b;
//     return {
//         title: title1,
//         director: director1,
//         year: year1,
//         genre: genre2,
//         cast: cast2,
//     };
// }
// const movie = merge(movie1, movie2);
// console.log(movie);

// 2-topshiriq. Rest va spread.

// 1-misol
// const ingredients = ["Flour", "Sugar", "Eggs", "Butter"];
// const newIngredient = "Milk";
// const newArray = [newIngredient, ...ingredients];
// console.log(newArray);


// 2-misol
// const user = {
//     name: "Admin",
//     age: 26,
//     email: "admin@example.com"
// };
// const isActive = true;
// const lastLogin = new Date();
// const newUser = {
//     ...user,
//     isActive,
//     lastLogin
// };
// console.log(newUser);


// 3-misol
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const mergedArray = [...arr1, ...arr2];
// console.log(mergedArray); 


// 4-misol
// function sum(a, b, c) {
//     return a + b + c;
// }
// const numbers = [1, 2, 3];
// const result = sum(...numbers);
// console.log(result);


// 5-misol
// const numbers = [3, 1, 6, 2, 5];
// const sortedNumbers = [...numbers].sort();
// console.log(sortedNumbers); 


// 6-misol
// function findMax(...args) {
//     return Math.max(...args);
// }
// const numbers = [10, 5, 20, 8];
// const maxNumber = findMax(...numbers);
// console.log(maxNumber);



// 7-misol
// function combineProperties(...objects) {
//     return objects.reduce((combined, obj) => ({ ...combined, ...obj }), {});
// }
// const obj1 = { name: "admin", age: 25 };
// const obj2 = { email: "admin@example.com", isActive: true };
// const combinedProperties = combineProperties({...obj1}, {...obj2});
// console.log(combinedProperties);



// class Book {
//     constructor(title, author, genre) {
//         this.title = title;
//         this.author = author;
//         this.genre = genre;
//         this.availability = true; 
//     }

//     borrowBook() {
//         if (this.availability) {
//             this.availability = false;
//             console.log(`${this.title}`);
//         } else {
//             console.log(`${this.title}`);
//         }
//     }

//     returnBook() {
//         if (!this.availability) {
//             this.availability = true;
//             console.log(`${this.title}`);
//         } else {
//             console.log(`${this.title}`);
//         }
//     }
// }

// class Library {
//     constructor(name) {
//         this.name = name;
//         this.books = [];
//     }

//     addBook(book) {
//         this.books.push(book);
//         console.log(`${book.title} ${this.name}.`);
//     }

//     removeBook(book) {
//         const index = this.books.indexOf(book);
//         if (index !== -1) {
//             this.books.splice(index, 1);
//             console.log(`${book.title} ${this.name}.`);
//         } else {
//             console.log(`${book.title} ${this.name}.`);
//         }
//     }

//     searchBook(title) {
//         const foundBook = this.books.find(book => book.title === title);
//         if (foundBook) {
//             return foundBook;
//         } else {
//             console.log(`Kitob nomi "${title}" topilmadi ${this.name}.`);
//             return null;
//         }
//     }

//     borrowBook(title) {
//         const book = this.searchBook(title);
//         if (book) {
//             book.borrowBook();
//         }
//     }

//     returnBook(title) {
//         const book = this.searchBook(title);
//         if (book) {
//             book.returnBook();
//         }
//     }
// }
// const book1 = new Book("Merlin", "F. Scott Fitzgerald", "Badiiy");
// const book2 = new Book("Kusto", "Harper Lee", "Classics");
// const library = new Library("Central Library");
// library.addBook(book1);
// library.addBook(book2);
// library.borrowBook("Merlin");
// library.borrowBook("Kusto");
// library.returnBook("Merlin");


// class ShoppingCart {
//     constructor() {
//         this.cart = new Map();
//     }

   
//     addItem(productId, quantity) {
//         if (this.cart.has(productId)) {
            
//             const existingQuantity = this.cart.get(productId);
//             this.cart.set(productId, existingQuantity + quantity);
//         } else {
           
//             this.cart.set(productId, quantity);
//         }
//     }

  
//     removeItem(productId) {
//         if (this.cart.has(productId)) {
//             this.cart.delete(productId);
//         } else {
//             console.log("Mahsulot topilmadi");
//         }
//     }
 
//     calculateTotalCost(prices) {
//         let totalCost = 0;
//         for (let [productId, quantity] of this.cart) {
//             if (prices.has(productId)) {
//                 totalCost += prices.get(productId) * quantity;
//             } else {
//                 console.log(`ID bilan mahsulot narxi ${productId} mavjud emas.`);
//             }
//         }
//         return totalCost;
//     }
//     applyDiscount(totalCost, discountPercentage) {
//         return totalCost * (1 - discountPercentage / 100);
//     }
// }

// const shoppingCart = new ShoppingCart();
// shoppingCart.addItem("p1", 2);
// shoppingCart.addItem("p2", 1);
// shoppingCart.addItem("p3", 3);
// shoppingCart.removeItem("p2");
// const prices = new Map([
//     ["p1", 10],
//     ["p2", 20],
//     ["p3", 15]
// ]);
// const totalCost = shoppingCart.calculateTotalCost(prices);
// console.log("Umumiy harajat:", totalCost);
// const discountTotalCost = shoppingCart.applyDiscount(totalCost, 10);
// console.log("10% chegirmadan keyin umumiy xarajat:", discountTotalCost);



// const urls = [
//     "https://example.com",
//     "https://google.com",
//     "https://bing.com",
//     "https://yahoo.com",
//     "https://example.com",
//     "https://facebook.com",
//     "https://google.com"
// ];
// const uniqueUrlsSet = new Set(urls);
// const uniqueUrls = Array.from(uniqueUrlsSet);
// console.log("Unique URLs:", uniqueUrls);
// const urls1 = new Set([
//     "https://example.com",
//     "https://google.com",
//     "https://bing.com"
// ]);
// const urls2 = new Set([
//     "https://example.com",
//     "https://yahoo.com",
//     "https://facebook.com"
// ]);
// const commonUrls = new Set([...urls1].filter(url => urls2.has(url)));
// console.log("Common URLs:", Array.from(commonUrls));
// console.log("Size of urls1 Set:", urls1.size);
// console.log("Size of urls2 Set:", urls2.size);
// const combinedSet = new Set([...urls1, ...urls2]);
// console.log("Combined Set:", Array.from(combinedSet));


// function customizeElement(elementId) {
//     const element = document.getElementById(elementId);
//     const computedStyles = getComputedStyle(element);
//     const fontSize = prompt("Shriftni kiriting::");
//     const color = prompt("Rangini kiriting:");
//     const bgColor = prompt("Backgroundni kiriting:");
//     const fragment = document.createDocumentFragment();
//     const modifiedElement = element.cloneNode(true); 
//     modifiedElement.style.fontSize = fontSize || computedStyles.getPropertyValue('font-size');
//     modifiedElement.style.color = color || computedStyles.getPropertyValue('color');
//     modifiedElement.style.backgroundColor = bgColor || computedStyles.getPropertyValue('background-color');
//     fragment.appendChild(modifiedElement);
//     element.parentNode.replaceChild(fragment, element);
//   }



// localStorage
// localStorage.setItem('key', 'value'); 
// const data = localStorage.getItem('key'); 
// localStorage.removeItem('key'); 
// localStorage.clear(); 



// sessionStorage
// sessionStorage.setItem('username', 'Ali');
// sessionStorage.setItem('age', '25');
// const username = sessionStorage.getItem('username');
// const age = sessionStorage.getItem('age');
// console.log(username);
// console.log(age); 
// sessionStorage.removeItem('age');
// sessionStorage.clear();


// Cookies
// document.cookie = "username=Ali; expires=Sun, 28 Jan 2023 12:00:00 UTC; path=/";
// document.cookie = "age=26; expires=Sun, 28 Jan 2023 12:00:00 UTC; path=/";
// const cookies = document.cookie;
// console.log(cookies); 
// document.cookie = "username=Ali; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
// document.cookie = "age=26; expires=Thu, 29 Jan 2023 00:00:00 UTC; path=/";








