const array = ['hello', 34567, false, null];

// console.log(arr1);

// console.log(typeof arr1);

// console.log(Array.isArray(arr1));

const movies=['Danjal','kill','Manji','DDLJ', 'Jawan','PK']

console.log(movies.lenght);
//indexing

console.log( movies[3]); // also works with strings
console.log( movies.at(-2)); // also works with strings

movies[3] = 'Krish'
console.log( movies);

console.log( movies.indexOf('kill')); // also works with strings

// slicing
console.log( movies);
console.log( movies.slice(2,5));
console.log( movies.slice(2,-3));
console.log( movies.slice(2));
console.log( movies.slice(2,60));

//adding and removing elements
movies.push('kalki');  // adds element at start of array
console.log(movies);

movies.unshift('KGF');  // adds element at start of array
console.log(movies);

movies.pop(); // removes element from end of array
movies.shift();// removes element from start of array

console.log(movies);

// movies.splice(3, 2); // removes 2 elements starting from index 3
// movies.splice(3, 2, 'Deadpool', 'Venom'); // replacing elements
movies.splice(3, 0, 'Deadpool', 'Venom'); // replacing elements
console.log(movies);



