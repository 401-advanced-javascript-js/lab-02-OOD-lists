'use strict';

// These 2 should be interchangeable!
// const List = require('../list.js');
const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of 0 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    expect(stuff.length).toEqual(1);
    expect(stuff.data[stuff.length-1]).toEqual('a');

    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[stuff.length-1]).toEqual('b');
  });

  
});
