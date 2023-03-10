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
;
function printPoint(pt) {
    console.log('The x coord is:', pt.x);
    console.log('The y coord is:', pt.y);
}
;
printPoint({ x: 3, y: 5 });
function logId(id) {
    console.log('Your id is:', id);
}
;
logId('101');
logId(202);
;
;
;
;
//type assertions are for when you have more info about somethings type
//than TypeScript knows. document.getElementById is an example of this
var myCanvas = document.getElementById('main_canvas');
//without specifying TypeScript would only know it was some kind of 
//HTML element
//in a tsx file you can use angle notation for assertions
//const myCanvas = <HTMLCanvasElement>document.getElementById('main_canvas')
//type literals limit types to more specific values
function printAlignment(s, alignment) {
    console.log(s, alignment);
}
;
//works
printAlignment('Hello', 'center');
;
function printWidth(x) {
    console.log(x);
}
;
printWidth({ width: 50 });
printWidth('auto');
//with objects, type scripts assume values can change. 
//use an interface to specify when they can only be a certain set of values
var req = ({ url: 'https://www.example.com', method: 'GET' });
// handleRequest(req.url, req.method)
//this will return an error because type string is not the same as the 
//method GET
var req2 = ({ url: 'https://www.example.com', method: 'GET' });
//or
var req3 = ({ url: 'https://www.example.com', method: 'GET' });
//handleRequest(req.url, req.method as 'GET')
//finally const can change the whole object to a literal
var req4 = ({ url: 'https://www.example.com', method: 'GET' });
//null and undefined are two primitives for uninitialized of absent values
//strictNullChecks determines whether or not null or undefined values
//can be accessed normally or if you need to check it they are null first
//the postfix ! makes sure the value is not null or undefined
function doSomething(x) {
    console.log(x.toUpperCase());
}
doSomething("Hello");
function getArea(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * Math.pow(shape.radius, 2);
        //don't forget the ! since radius could be undefined
    }
}
//this is better because it's either a circle with a radius or a square
//with sides and never a circle without a radius.
// function getArea2 (shape: Shape2) {
//   return Math.PI * shape.radius ** 2;
// }
//this gives an error because only circles have radii and the shape might 
//be a square
function getArea3(shape) {
    if (shape.kind === 'circle') {
        Math.PI * Math.pow(shape.radius, 2);
    }
}
//this works because we narrowed it to circles before using the radius
//unions with the same property with different literals are discriminated
//unions. In this example 'kind' is the shared property or discriminant
function getArea4(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * Math.pow(shape.radius, 2);
        case 'square':
            return Math.pow(shape.side, 2);
        default:
            var _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
//adding a default statement assigning type never to shape handles every
//possible unaccounted input. If we added a triangle to Shape2 this would
//give an error because triangle is not assignable to type never requiring
//us to first handle the case where the kind is a triangle first.
//function type expressions are syntactically similar to arrow functions
function greeter(fn) {
    fn('Hello World');
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function greeter2(fn) {
    fn('Hello World Again');
}
;
function printToConsole2(s) {
    console.log(s);
}
;
greeter2(printToConsole2);
function doSomething2(fn) {
    console.log(fn.description + " returned " + fn(6));
}
//sometimes a functions input type relates to the output type
function firstElement(arr) {
    return arr[0];
}
//this works but it would be better to use generics
function firstElement2(arr) {
    return arr[0];
}
//by adding a parameter type and using it in two places we create
//a link between the input and output
//constraints can be used to limit the kinds of types a type
//parameter can accept
function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
longest(['red'], ['blue', 'green']); //returns second array
longest('Blake', 'Aria'); //returns Blake
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
var d1 = makeDate(12345678);
var d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3);
//no overload exists for two arguments
//when writing overflow functions ALWAYS have two or more overflows before
//the implementation function
//functions that return no values are void types
//void and undefined are not the same thing
//object types return values that are not a primitive
//object is not the global Object
//unknown types represent any value. similar to any but safer 
//some functions never return a value.
//the never type represents a situation that should never happen
//the program throws an exception and terminates the program
//if the function is ever accessed
function epicFail(msg) {
    throw new Error(msg);
}
//destructuring syntax
function sum(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    console.log(a + b + c);
}
function sum2(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    console.log(a + b + c);
}
