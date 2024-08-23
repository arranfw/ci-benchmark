import { expect, it, describe } from 'bun:test';

describe('index.test', () => {
  it('passes in a random amount of time', async () => {
    const random = Math.random();
    await new Promise((r) => setTimeout(r, random * 10000));
    expect(true).toBe(true);
  });
});
