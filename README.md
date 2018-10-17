# Interactive grid challenge
## Description
The cost of rendering thousands of elements in the DOM is very high. The objective of this challenge is to offer a solution to this problem.

The challenge consists of implementing a component that renders only child elements that are visible within the viewport.

### Details
A Grid contains multiple `GridItems`. Toggle a className `active` to those `GridItems` that are visible in the viewport.

### Solution
Implemented IntersectionObserver API to toggle className `active` to `GridItems` outside the viewport.

## Install instructions
```
npm install
```

## Develop
This command enables a local server (webpack-dev-server) located in http://localhost:9000
```
npm start
```

## Documentation
Used JSDoc3 documentation style.


## Coding style
Followed AirBnB style guidelines.
