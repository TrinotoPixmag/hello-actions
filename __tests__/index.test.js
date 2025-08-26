const { hello } = require("../index");

test("should return Hello, GitHub Actions Its CI/CD!", () => {
  expect(hello()).toBe("Hello, GitHub Actions Its CI/CD!");
});
