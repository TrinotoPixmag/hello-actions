const { hello } = require("../index");

test("should return Hello, GitHub Actions!", () => {
  expect(hello()).toBe("Hello, GitHub Actions!");
});
