var message = 'Hello World!';
console.log(message);
var user = {
    name: 'Daniel',
    age: 36
};
console.log(user);
var value = Math.random() < 0.5 ? 'a' : 'b';
if (value !== 'a') {
    /* do this
    } else if ( value === 'b' ) {
      This comparison appears to be unintentional
      because the types '"a"' and '"b"' have no overlap.*/
}
;
console.log(value);
function greet(person, date) {
    /* Types get removed after compiled */
    console.log("Hello, ".concat(person, ", today is ").concat(date.toDateString(), "!"));
    /* Changed to concatenated strings when compiled. This
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
//Any is a special typescript type
var obj = { x: 1 };
//The following will not give an error in TypeScript
//The commented lines do crash the JavaScript
//Using type any ignores the type checking in TypeScript
// obj.foo();
// obj();
obj.bar = 100;
obj = 'hello';
var n = obj;
console.log("Type: any", obj);
//Use the flag noImplicitAny to make TypeScript give an error
//for any types
//You can add an optional type annotation when declaring variables
var myName = 'John';
//Often type annotations are optional. The following will also be
//a string type
var yourName = 'Link';
//type annotations can also be added to function parameters
function annotationGreet(name) {
    console.log("Hello, ".concat(name.toUpperCase(), "!!"));
}
annotationGreet(yourName);
//TypeScript gives an error if the function is given an argument 
//that is the wrong type for the parameter.
// annotationGreet(42);
//type annotations can be added to return values also and are added after
//the list of parameters
function favNumber() {
    return 42;
}
;
console.log(favNumber());
var names = ['Zelda', 'Link', 'Navi'];
//For anonymous functions parameters are automatically given types 
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
//this is called contextual typing because the context of the
//function determines the type
//type annotations with objects are as follows
function printCoord(pt) {
    console.log('x', pt.x);
    console.log('y', pt.y);
}
;
printCoord({ x: 3, y: 5 });
//parameters can be optional and are notated with a ?
function printName(obj) {
    //This will fail if no last name is provided
    console.log(obj.lastName);
    //Instead check if it's undefined first
    if (obj.lastName !== undefined) {
        console.log(obj.lastName);
    }
    ;
}
;
printName({ firstName: 'Blake', lastName: 'Turner' });
printName({ firstName: 'Aria' });
//TypeScript allows you to create your own types
//Union types create a type by combining two existing types
function printId(id) {
    console.log('Your ID is:', id);
}
;
//Ok
printId(101);
//Ok
printId('202');
//Error
// printId({id: 303});
//TypeScript only allows operations that work with all types in a union
function printID(id) {
    // console.log('Your id is:', id.toUpperCase());
    //This gives an error because toUpperCase() doesn't work with numbers
    if (typeof id === 'string') {
        console.log('Your id is:', id.toUpperCase());
        // This works because we limited id to strings
    }
    else {
        console.log('Your id is:', id);
    }
    ;
}
;
//with arrays
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log('Hello', x.join(' and '));
    }
    else {
        console.log('Welcome lone traveler', x);
    }
    ;
}
;
//sometimes all members in a union have something in common
//the type check is unnecessary in this case
function getFirstThree(x) {
    return x.slice(0, 3);
    //slice works on both an array of numbers and a string
}
