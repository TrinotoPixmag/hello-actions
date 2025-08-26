function hello() {
    return "Hello, GitHub Actions!";
  }
  
  if (require.main === module) {
    console.log(hello());
  }
  
  module.exports = { hello };
  