# JavaScript Functions and Iterators

## Introduction

This repository contains a set of JavaScript functions and iterators implemented using ES6 features such as arrow functions, object destructuring, spread syntax, and generator functions. The functions and iterators are designed to manipulate employee data in a departmental structure and demonstrate how to create, iterate through, and extract information from objects and arrays in JavaScript.

## Contents

- `11-createEmployeesObject.js`: Function to create an object representing employees in different departments.
- `12-createReportObject.js`: Function to create a report object containing department-wise employee lists and methods to get department counts.
- `100-createIteratorObject.js`: Function to create an iterator for iterating through all employees in all departments.
- `101-iterateThroughObject.js`: Function to extract and concatenate all employee names from the iterator.

## Installation

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/your-username/your-repo.git
   ```

2. Navigate to the project directory:
   ```
   cd your-repo
   ```

3. Install dependencies (if required):
   ```
   npm install
   ```

## Usage

1. Import the necessary functions into your JavaScript files:
   ```javascript
   import createEmployeesObject from './11-createEmployeesObject.js';
   import createReportObject from './12-createReportObject.js';
   import createIteratorObject from './100-createIteratorObject.js';
   import iterateThroughObject from './101-iterateThroughObject.js';
   ```

2. Create employee and report objects:
   ```javascript
   const employees = {
       ...createEmployeesObject('engineering', ['Bob', 'Jane']),
       ...createEmployeesObject('marketing', ['Sylvie'])
   };
   const report = createReportObject(employees);
   ```

3. Create an iterator for employee iteration:
   ```javascript
   const reportWithIterator = createIteratorObject(report);
   ```

4. Iterate through the object and extract employee names:
   ```javascript
   const employeeNames = iterateThroughObject(reportWithIterator);
   console.log(employeeNames); // Output: 'Bob | Jane | Sylvie'
   ```