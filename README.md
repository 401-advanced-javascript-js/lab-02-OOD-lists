# LAB - 02,

## Object Oriented Design and List Implementation

### Author: Jagdeep Singh

### Links and Resources
* [submission PR](http://xyz.com)
* [travis](https://www.travis-ci.com/401-advanced-javascript-js/lab-02-OOD-lists

### Modules

#### `list.js and list-constructor.js`
##### Exported Values and Methods

###### `push(object) -> undefined`
Adds given object to end of list

###### `pop() -> object`
Removes last object from list

###### `shift() -> object`
Removes the first object from list and returns it's value

###### `unshift(object) -> integer`
Adds given object(s) to beginning of list and returns length of list

###### `forEach(function) -> undefined`
Executes given function on each object in list

#### `vehicle-class.js, vehicle-constructor.js, vehicle-factory.js`
##### Exported Values and Methods

###### `new Vehicle(string, integer) -> Vehicle Object`
`let x = new Vehicle('3 Wheel Vehicle', 3)`

###### `new Car(string) -> Car Object`
Vehicle that always has 2 wheels

###### `new Motorcycle(string) -> Motorcycle Object`
Vehicle that always has 2 wheels



### Setup
  
#### Tests
* How do you run tests?

  `npm test`

* Assertions for list

  * push(item) method
  * pop() method
  * shift() method
  * unshift(item) method
  * forEach(function) method

* Assertions for object

  * Vehicle Object
  * Car object, extention of Vehicle
  * Motorcycle object, extention of Vehicle
