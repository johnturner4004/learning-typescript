const message = 'Hello World!';
console.log(message);

const user = {
  name: 'Daniel',
  age: 36,
}
console.log(user);

const value = Math.random() < 0.5 ? 'a' : 'b';
if ( value !== 'a' ) {
/* do this
} else if ( value === 'b' ) {
  This comparison appears to be unintentional 
  because the types '"a"' and '"b"' have no overlap.*/
};

console.log(value);

function greet(person: string , date: Date) {
  /* Types get removed after compiled */
  console.log(`Hello, ${person}, today is ${date.toDateString()}!`);
  /* Changed to concatonated strings when compiled. This
  is because TypeScript by default 'downlevels' the code
  to ES3. Running `tsc --target es2015 main.js` will 
  compile to ES6. */
}

/*greet('Brendan');
Expected 2 arguments, but got 1.ts(2554)
main.ts(20, 24): An argument for 'date' was not provided.*/

/*greet('Madi', Date());
Argument of type 'string' is not assignable
to parameter of type 'Date'.*/

greet('Madi', new Date());
/* Works because new Date() returns a date object */


/*Strictness:
TS has various levels of strictness. Adding strict: true,
to tsconfig.json turns them all on */

/*noImplicitAny:
  prevents variables from having the type any*/

/*strictNullChecks:
  more explicitly handles null and undefined types*/