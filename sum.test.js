const { test, expect } = require("@jest/globals");
const sum = require("./sum");

test("properly add two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});
