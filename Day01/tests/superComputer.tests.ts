import { describe, it, expect } from '@jest/globals';
import { superComputer, callback } from '../src/superComputer';

describe('Test superComputer function', () => {
  it('1 + 1', () => {
    expect(superComputer(1, '+', 1, callback)).toBe(2);
  });
  it('1 - 1', () => {
    expect(superComputer(1, '-', 1, callback)).toBe(0);
  });
  it('5 * 5', () => {
    expect(superComputer(5, '*', 5, callback)).toBe(25);
  });
  it('1 / 10', () => {
    expect(superComputer(1, '/', 10, callback)).toBe(0.1);
  });
  it('15 % 10', () => {
    expect(superComputer(15, '%', 10, callback)).toBe(5);
  });
  it('15 % 0', () => {
    expect(superComputer(15, '%', 0, callback)).toBe(undefined);
  });
  it('15 / 0', () => {
    expect(superComputer(15, '/', 0, callback)).toBe(undefined);
  });
});
