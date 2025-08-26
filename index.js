function hello() {
    return "Hello, GitHub Actions Its CI/CD!";
  }
  
  if (require.main === module) {
    console.log(hello());
  }
  
  module.exports = { hello };
  