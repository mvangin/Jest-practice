const capitalize = require('./capitalize');

test('capitalize hello to be Hello', () => {
  expect(capitalize("hello")).toBe("Hello");
});