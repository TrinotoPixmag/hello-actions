function hello() {
    return "Hello, GitHub Actions Its CI/CD 2!";
  }
  
  if (require.main === module) {
    console.log(hello());
  }
  
  module.exports = { hello };
  