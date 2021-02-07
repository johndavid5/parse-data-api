module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [
    "<rootDir>/src"
  ],
  // collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}','src/controllers/**/*.{ts,tsx}'],
  //moduleNameMapper: {
  //  "@exmpl/(.*)": "<rootDir>/src/$1"
  //},
};
