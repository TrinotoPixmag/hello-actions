const { hello } = require("../index");

test("should return Hello, GitHub Actions Its CI/CD 2!", () => {
  expect(hello()).toBe("Hello, GitHub Actions Its CI/CD 2!");
});
