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

  it('pops items from the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.push('d');

    expect(stuff.length).toEqual(4);

    expect(stuff.pop()).toEqual('d');
    expect(stuff.length).toEqual(3);

    expect(stuff.pop()).toEqual('c');
    expect(stuff.length).toEqual(2);

    expect(stuff.pop()).toEqual('b');
    expect(stuff.length).toEqual(1);

    expect(stuff.pop()).toEqual('a');
    expect(stuff.length).toEqual(0);

    // undefined if empty list
    expect(stuff.pop()).toBeUndefined();
    expect(stuff.length).toEqual(0);
  });

  it('removes items from the front of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.push('d');

    expect(stuff.shift()).toEqual('a');
    expect(stuff.length).toEqual(3);

    expect(stuff.shift()).toEqual('b');
    expect(stuff.length).toEqual(2);

    expect(stuff.shift()).toEqual('c');
    expect(stuff.length).toEqual(1);

    expect(stuff.shift()).toEqual('d');
    expect(stuff.length).toEqual(0);

    expect(stuff.shift()).toBeUndefined();
    expect(stuff.length).toEqual(0);
  });

  it('adds items to the front of the data set', () => {
    let stuff = new List();

    expect(stuff.unshift('b')).toEqual(1);
    expect(stuff.data[0]).toEqual('b');

    expect(stuff.unshift('a')).toEqual(2);
    expect(stuff.data[0]).toEqual('a');
    expect(stuff.data[1]).toEqual('b');

    expect(stuff.unshift('1','2', '3')).toEqual(5);
    expect(stuff.unshift('6')).toEqual(6);
    expect(stuff.data[0]).toEqual('6');
    expect(stuff.data[1]).toEqual('1');
    expect(stuff.data[2]).toEqual('2');
    expect(stuff.data[3]).toEqual('3');
    expect(stuff.data[4]).toEqual('a');
    expect(stuff.data[5]).toEqual('b');
  });

  it('forEach executes function on each item in the data set', () => {
    let stuff = new List();
    stuff.push(1);
    stuff.push(2);
    stuff.push(3);

    expect(() => stuff.forEach()).toThrow(TypeError);
    expect(stuff.forEach((item) => {})).toBeUndefined();
  });
});
