//common operation//
// addition of two numbers//
let a = 10;
let b = 20;
let sum = a + b;
console.log(sum);
//subtraction of two numbers//
let c = 30;
let d = 15;
let difference = c - d;
console.log(difference);
// multiplication of two numbers//
let e = 5;
let f = 6;
let product = e * f;
console.log(product);
// division of two numbers//
let g = 20;
let h = 4;
let quotient = g / h;
console.log(quotient);
//shorthand addition//
let i=10;
let j=20;
i+=j;
console.log(i);
//shorthand subtraction//   
let k=30;
let m=15;
k-=m;
console.log(k);
//shorthand multiplication//    
let n=5;
let l=6;
n*=l;
console.log(n);   
//shorthand division//
let o=20;
let p=4;
o/=p;
console.log(o);
//increment//
let girl=10;
girl++;
console.log(girl);
//decrement//
let boy=20;
boy--;
console.log(boy);
//exponent//
let q=2;
let r=3;
let exponent = q ** r;
console.log(exponent);
//remainder//
let s=10;
let t=3;
let remainder = s % t;
console.log(remainder);


//comparison operators//
//strict equality//
let u=10;   
let v=10;
console.log(u === v);
//non-strict equality//
let w=10;
let x="10";
console.log(w == x);
//strict non-equality//
let y=10;
let z=20;
console.log(y !== z);
//less than//
let aa=5;
let bb=10;  
console.log(aa < bb);
//greater than//
let cc=15;
let dd=10;
console.log(cc > dd);
//less than or equal to//
let ee=5;
let ff=5;
console.log(ee <= ff);
//greater than or equal to//
let gg=10;
let hh=10;
console.log(gg >= hh);

//string concatenation//
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);

//string interpolation//
let name = "John";
let age = 30;
let message = `My name is ${name} and I am ${age} years old.`;
console.log(message);



//string methods//
let Strin = "Hello, world!";

console.log(Strin.length);
console.log(Strin.toUpperCase());
console.log(Strin.toLowerCase());
console.log(Strin.startsWith("Hello"));
console.log(Strin.endsWith("world!"));
console.log(Strin.includes("world"));
console.log(Strin.repeat(3));
console.log(Strin.charAt(0));
console.log(Strin.charCodeAt(0));
console.log(Strin.indexOf("world"));
console.log(Strin.lastIndexOf("world"));
console.log(Strin.substring(0, 5));
console.log(Strin.slice(0, 5));
console.log(Strin.split(","));
console.log(Strin.trim());
console.log(Strin.replace("world", "universe"));
console.log(Strin.padStart(20, "*"));
console.log(Strin.padEnd(20, "*"));

//if statement//
let age1 = 18;
if (age1 >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

//switch statement//
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's Monday!");
    break;
  case "Tuesday":
    console.log("It's Tuesday!");
    break;
  default:
    console.log("It's a weekday.");
}

//for loop//
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//while loop//
let se = 0;
while (se < 5) {
  console.log(se);
  se++;
}

//do-while loop//
let ne = 0;
do {
  console.log(ne);
  ne++;
} while (ne < 5);

//nested loop//
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

//break statement//
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

//continue statement//
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

//return statement//
function add(a, b) {
  return a + b;
}
let result = add(1, 2);
console.log(result);


//function declaration//
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

//function expression//
let greet1 = function(name) {
  return `Hello, ${name}!`;
};
console.log(greet1("Bob"));

//arrow function//
let greet2 = (name) => {
  return `Hello, ${name}!`;
};
console.log(greet2("Charlie"));

//object literal//
let person = {
  name: "Alice",
  age: 30,
  greet: function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
};
console.log(person.greet());

//array literal//
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);

//spread operator//
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

//object destructuring//
let person1 = {
  name: "Alice",
  age: 30
};
let { name, age } = person1;
console.log(name);
console.log(age);






