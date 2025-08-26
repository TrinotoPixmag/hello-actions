module.exports = {
    apps: [
      {
        name: "hello-actions",
        script: "./index.js",
        cwd: "/home/ubuntu/hello-actions",
        instances: 1,
        autorestart: true,
        watch: false,
        env: {
          NODE_ENV: "production"
        }
      }
    ]
  };
  