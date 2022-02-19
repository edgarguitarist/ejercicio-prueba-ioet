# ejercicio-prueba-ioet

## Welcome to the ejercicio-prueba-ioet repository

This a project to test my knowledge and skills to resolve problems, in this repository you will find the following:

- [ejercicio-prueba-ioet](#ejercicio-prueba-ioet)
  - [Welcome to the ejercicio-prueba-ioet repository](#welcome-to-the-ejercicio-prueba-ioet-repository)
  - [Description of the Exercise](#description-of-the-exercise)
    - [Objective](#objective)
    - [Expected Input](#expected-input)
    - [Example 1](#example-1)
    - [Example 2](#example-2)
    - [Solution](#solution)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)

## Description of the Exercise

The company ACME offers their employees the flexibility to work the hours they want. But due to some external circumstances they need to know what employees have been at the office within the same time frame

### Objective

The goal of this exercise is to output a table containing pairs of employees and how often they have coincided in the office.

### Expected Input

Input: the name of an employee and the schedule they worked, indicating the time and hours. This should be a .txt file with at least five sets of data. You can include the data from our examples below:

### Example 1

INPUT

`RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00- 21:00` <br>
`ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00` <br>
`ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00`

OUTPUT:

`ASTRID-RENE: 2` <br>
`ASTRID-ANDRES: 3` <br>
`RENE-ANDRES: 2`

### Example 2

INPUT:

`RENE=MO10:15-12:00,TU10:00-12:00,TH13:00-13:15,SA14:00-18:00,SU20:00-21:00` <br>
`ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00`

OUTPUT:

`RENE-ASTRID: 3`

### Solution

My solution is based on the idea of ​​formatting the input and transforming it into an object in a function '`txtToObject`', this allows me to easily handle the input in another functions to get the expected output and to use the same code to test and verify if the input is correct. or if it needs to be corrected by removing unexpected spaces or line breaks.

The road of the solution is as follows:

1. Transform the input into an object --> `txtToObject()`
2. Convert the hours and minutes to a number of minutes for each employee --> `timeToMinutes()`.
3. Create a function to compare the days and hours worked by two employees at time --> `checkSchedule()`.
4. Create a function that allows traversing the object and use the function that allows the comparison of the days and hours worked by the employees --> `comparesAll()`.
5. In the end, to show the result, only a `console.log()` is used to include the functions, obtaining something like `console.log(comparesAll(txtToObject(name-file.txt)))`

## Installation

To install the project you need to have [Node.js](https://nodejs.org/) installed and run the following command `npm install`, that's it... Nothing else to do.

In this repository I use only two packages:

1. [ESLint](https://eslint.org/)
2. [Mocha.js](https://github.com/mochajs/mocha)

## Usage

1. To run the project with the default file **my-test-data.txt** you need to use the following command `npm start`.
2. To run the project with another file with the extension **.txt** you need to use the following command `npm start name-of-the-file.txt`, where **name-of-the-file.txt** is the name of the file that you want to use.

**Notice:** The file must be in the same directory of the project also you can create a new folder with other files and usage the path of the new subfolder to reference the file that you wish to use.

## Testing

The project is tested using [**mocha**](#installation) and to run the test you need to use the following command `npm test` this automatically run the test with the default file **my-test-data.txt** and the test will be executed.

The propose of the test is check if the result of the execution give an object with the expected values and the correct structure.

**Notice:** I never before used any test library, so I decided to use the [**mocha**](#installation) library to test the project based on what I read as a recommendation to test in Node.js.
