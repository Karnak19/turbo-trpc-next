const withTM = require("next-transpile-modules")(["ui", "trpc"]); // pass the modules you would like to see transpiled
module.exports = withTM({
  reactStrictMode: true,
});
