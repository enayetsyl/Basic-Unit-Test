# Title: A Beginner's Guide to Unit Testing in JavaScript with Jest

Unit testing is a fundamental practice in modern software development that ensures individual units of code, typically functions or methods, behave as expected. In this beginner-friendly guide, we'll explore the basics of unit testing in JavaScript using Jest, a popular testing framework maintained by Facebook.

### What is Unit Testing?

Unit testing involves breaking down your code into small, testable units and writing tests to verify their behavior. Each unit is tested in isolation, meaning that dependencies are mocked or stubbed to isolate the unit under test. This approach helps identify bugs early in the development process and provides confidence when making changes to the codebase.

### Setting up Jest:

To begin, ensure you have Node.js installed on your machine. If not, download and install the LTS version from here. Next, create a new folder for your project and open it in your preferred code editor. Initialize a new npm project by running npm init -y in your terminal.

Now, install Jest as a development dependency by running:


```javascript
npm install jest -D
```


### Writing Your First Test:

Let's start by writing a simple function and testing it with Jest. Create a new JavaScript file named sum.js and define a function called sum that takes two parameters a and b and returns their sum. Export this function using module.exports.


```javascript
function sum(a, b) {
    return a + b;
}

module.exports = sum;
```

Now, create a test file named sum.test.js. Import the sum function and write a test to verify its correctness.

```javascript
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
Running Tests:
```
- We imported the sum function using common js import which use require. 

- Then we started a text. Inside the pherenthesis first we have to put a description. In our example it is "add  1 + 2 to equal 3". Then we used annonymous arrow function that will run the test. Inside the function we used word expect and call the sum function and pass 1 & 2 as params and put .toBe(3) means the result we expect is 3. Then we have to test it.



To run your tests, update the test script in your package.json file to "test": "jest". The package.json file will look like as follows
```javascript
{
  "name": "jest-intro",
  "version": "1.0.0",
  "description": "",
  "main": "sum.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^29.6.2"
  }
}
```
To run your tests, execute the following command in your terminal:

```javascript
npm test
```

- Jest will automatically discover and run all files ending with .test.js or .spec.js in your project directory.

- This is a unit test. A unit test tests the smallest unit in isolation. So we just have a function that does one thing. That's a clean code principle. Your function should only do one thing. So this will also help you break down
larger problems into smaller ones, Which helps with problem solving overall. So we have our function it does one thing it just adds the two numbers and we can easily test that in a unit test.

### Expanding Your Testing Suite:

In addition to simple arithmetic functions, you can test more complex functionalities. Create a new file named isPalindrome.js. Create a function to check if a given word is a palindrome.

```javascript
function isPalindrome(word) {
  // Check if the word is the same forwards and backwards

  return word.toLowerCase() === word.toLowerCase().split('').reverse().join('').replaceAll(',','');
}

module.exports = isPalindrome;
```
- Inside a function we should do one thing. But in the above function we did two things. And it is necessary for out later explanation.

Now, let's create a corresponding test file named isPalindrome.test.js to test the isPalindrome function:

```javascript
// isPalindrome.test.js

const isPalindrome = require('./isPalindrome');

test('isPalindrome returns true for "taco cat"', () => {
  expect(isPalindrome('Tacocat')).toBe(true);
});

```

Running Tests:

To execute the tests, run the following command in your terminal:

```javascript
npm test
```
Jest will run all test files in your project and provide feedback on the test results.

- The result will show ee have two test Suites. Now as we have two test files and we ran two
tests and so both of the test Suites
completed and we passed all of the tests. 

- Have we really tested our function the way we should. We only check to see if it would return true. It could also or should also return false
when we pass in a word that is not a palindrome. 

- Lets add something to the above code

```javascript
// isPalindrome.test.js

const isPalindrome = require('./isPalindrome');

test('isPalindrome returns true for "taco cat"', () => {
  expect(isPalindrome('Tacocat')).toBe(true);
});

test('isPalindrome returns false for "Enayet"', () => {
  expect(isPalindrome('Enayet')).toBe(false);
});

```
-  Now let's pass in the word Enayet and we expect the result to be false. So now we're running two tests inside of the same test Suite.

- Let's go ahead and open the terminal run our tests again and see our output. 

- In our report you can see we have two test Suites but we ran three tests now and everything passed once again. 


### Decomposing Functions:

As we write more complex tests, it's essential to decompose functions into smaller, testable units. Let's refactor the isPalindrome function to separate the logic for reversing a string into its own function. Create a new file name reverseString.js and write following function to it. 

```javascript
  function reverseString(word){
    return word.split('').reverse().join('').replaceAll(',','')
  }
  module.exports = reverseString
```
- Now create a test file for it. Create a file with the name of reverseString.test.js and paste following code

```javascript
const reverseString = require('./reverseString')

test('Reverse any given string', () => {
  expect(reverseString('Enayet')).toBe('teyanE')
})
```
- Now go to the isPalindrome.js file and do following 

```javascript
// isPalindrome.js
const reverseString = require('./reverseString')


function isPalindrome(word) {
 
  return word.toLowerCase() === reversedString(word).toLowerCase();
}

module.exports = isPalindrome;
```
- Now if you run the test again everything will pass. 

- Breaking that is palindrome down to a separate
function that reversed the string was the right thing to do to get the accurate unit test, because if we weren't reversing that string properly it could have been causing our is palindrome test to fail without actually being the reason it was failing. The reason was we were not reversing the string properly.

### Getting full report

- Go back into the package.json and when we call jest we can add the coverage flag which is two dashes and then the word coverage. It will look like as follows
```javascript
{
  "name": "jest-intro",
  "version": "1.0.0",
  "description": "",
  "main": "sum.js",
  "scripts": {
    "test": "jest --coverage"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^29.6.2"
  }
}
```

- If we save that then it's going to give us a full report to say if we have tested all of our code. So let's run our test once again with that coverage flag and check out the output. It will be a little more detailed than what we received before and now we're getting a full table here in the terminal with our output. So not only the report at the bottom about the past or failed tests, we also have a full table here that says we are getting 100 percent coverage in everything we have essentially so
there's nothing we're missing. 