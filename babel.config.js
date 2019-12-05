module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: "2"
      }
    ],
    "@babel/preset-typescript",
    "@babel/preset-react"
  ],
  env: {
    test: {
      plugins: ["@babel/plugin-transform-modules-commonjs"]
    }
  },
  plugins: ["@babel/proposal-object-rest-spread"]
};
