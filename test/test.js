const { expect } = require('chai');
const { add, subtract, multiply, divide } = require('../mylib');

describe('mylib arithmetic functions', () => {
  describe('add()', () => {
    it('adds two numbers', () => {
      expect(add(2, 3)).to.equal(5);
      expect(add(-1, 1)).to.equal(0);
    });
  });

  describe('subtract()', () => {
    it('subtracts two numbers', () => {
      expect(subtract(5, 3)).to.equal(2);
      expect(subtract(0, 5)).to.equal(-5);
    });
  });

  describe('multiply()', () => {
    it('multiplies two numbers', () => {
      expect(multiply(4, 3)).to.equal(12);
      expect(multiply(-2, 3)).to.equal(-6);
    });
  });

  describe('divide()', () => {
    it('divides two numbers', () => {
      expect(divide(10, 2)).to.equal(5);
      expect(divide(-6, 3)).to.equal(-2);
    });

    it('throws an error when dividing by zero', () => {
      expect(() => divide(5, 0)).to.throw('Division by zero is not allowed');
    });
  });
});