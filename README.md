# roman-numerals

An [express.js](https://expressjs.com/) application to request for a roman numeral given a provided input.

## Specifications

- https://mathworld.wolfram.com/RomanNumerals.html
- https://en.wikipedia.org/wiki/Roman_numerals

| Roman Numeral | Decimal Value |
| ------------- | ------------- |
| I             | 1             |
| IV            | 4             |
| V             | 5             |
| IX            | 9             |
| X             | 10            |
| XL            | 40            |
| L             | 50            |
| XC            | 90            |
| C             | 100           |

### Adjustments

- Convert a number 1-255, inclusive, to its roman numeral equivalent

## Dependencies

- [express.js](https://expressjs.com/) - minimal Node.js web app framework
- [jest](https://jestjs.io/) - testing framework
- [babel](https://babeljs.io/) - Javascript compiler to support ES6 syntax

## Setup

### Requirements

The following technologies must be installed

- node@10.21.0
- npm@6.14.4

### Running the project

Run the following command to install the necessary dependencies for the project

```
npm install
```

Runs a file watcher that will transpile the server and restart when a file has changed. This command can be used if you are expecting to make changes to the project.

```
npm run watch:dev
```

Clears out the transpiled files, transpiles the project, and then runs the server. This command can be used if you just want to bring up the server and aren't planning on making changes to the project.

```
npm run build
```

### Sample Workflow

```
// inside roman-numerals directory
npm install
npm run watch:dev
```

## Design

Developed the roman numeral converter to be extensible, in the case that a requirement to support numbers > 255 may come in.

## Testing

### Unit Tests

Run the following command

```
npm run test
```

### API Tests

Prerequisites:

- Must have standalone postman app downloaded

Instructions to Run

1. Import the postman request collection `Roman_Numerals_Collection.postman_collection` into your postman app.
2. Click on the collection
3. Click the Run button
4. Click the Run Roman Numerals Collection button
5. Look at the output to verify tests that passed/failed.

## Project Structure

- `roman-numerals`
  - `server`
    - `bin`
      - setup the express server
    - `routes`
      - contains the routes as well as rest APIs
    - `src`
      - `converter`
        - contains converter functions that convert input into something else
      - `validator`
        - contains validators used to verify if input matches certain criteria
