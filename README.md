# roman-numerals

An [express.js](https://expressjs.com/) application to request for a roman numeral given a provided input.

## Specifications

- https://mathworld.wolfram.com/RomanNumerals.html
- https://en.wikipedia.org/wiki/Roman_numerals

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

To run the test cases run the following command

```
npm run test
```

## Project Structure

- `roman-numerals`
  - `server`
    - `bin`
    - `routes`
      - contains the routes as well as rest APIs
    - `src`
      - `converter`
        - contains converter functions that convert input into something else
      - `validator`
        - contains validators used to verify if input matches certain criteria
