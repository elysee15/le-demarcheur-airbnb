module.exports = {
  extends: ["react-app", "react-app/jest"],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  }
}
