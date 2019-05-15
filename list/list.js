'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param {*} item, item to insert
   */
  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    if (this.length !== 0) {
      let returnValue = this.data[this.length-1];
      delete this.data[this.length-1];
      this.length--;
      return returnValue;
    }
  }

  /**
   * Remove the first item from the list and return it's value
   * if list is empty return undefined
   * @returns {*}
   */
  shift() {
    if (this.length !== 0) {
      let returnValue = this.data[0];
      this.length--;
      for(let i = 0; i < this.length; i++) {
        this.data[i] = this.data[i+1];
      }
      return returnValue;
    }
  }

  /**
   * Add items to the beginning of the list and returns the length of the list
   * @param {*} item(s), item(s) to insert
   * @returns {*}
   */
  unshift(...args) {
    this.length += args.length;
    // shift current values to the right to make room 
    for(let i = (this.length); i > args.length; i--) {
      this.data[i-1] = this.data[i - 1 - args.length];
    }
    // add passed in items to beginning of list
    for(let i = args.length; i > 0; i--) {
      this.data[i-1] = args[i-1];
    }
    return this.length;
  }

  /**
   * Executes provided function once for each item in list
   * @param {function} func
   */
  forEach(func) {
    if (typeof func !== 'function') {
      throw new TypeError('Invalid Parameter, please pass in a function.');
    }
    for(let i = 0; i < this.length; i++) {
      func(this.data[i]);
    }
  }
}

module.exports = List;
