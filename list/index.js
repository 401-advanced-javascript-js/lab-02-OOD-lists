'use strict';

const List = require('./list-constructor.js');

let stuff = new List();
stuff.push('a');
stuff.push('b');

console.log(stuff.data);

let last = stuff.pop();

console.log(last === 'b');
